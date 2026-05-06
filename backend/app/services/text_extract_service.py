import pdfplumber
from docx import Document
from io import BytesIO

async def extract_text(file):
    content = await file.read()
    filename = file.filename.lower()

    if filename.endswith(".pdf"):
        text = extract_pdf(content)
    elif filename.endswith(".docx"):
        text = extract_docx(content)
    elif filename.endswith(".txt"):
        text = content.decode("utf-8")
    else:
        raise ValueError(f"Unsupported file type: {file.filename}")
    return text



def extract_pdf(content: bytes) -> str:
    pages = []
    with pdfplumber.open(BytesIO(content)) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text(layout=True)
            if page_text:
                # Split into lines, group into paragraphs by blank lines
                lines = page_text.splitlines()
                paragraphs = []
                current = []
                for line in lines:
                    if line.strip():
                        current.append(line.strip())
                    else:
                        if current:
                            paragraphs.append(" ".join(current))
                            current = []
                if current:
                    paragraphs.append(" ".join(current))
                pages.append("\n\n".join(paragraphs))
    return "\n\n".join(pages)


def extract_docx(content: bytes) -> str:
    doc = Document(BytesIO(content))
    paragraphs = []
    for para in doc.paragraphs:
        if para.text.strip():
            paragraphs.append(para.text.strip())
        else:
            # Empty paragraph = intentional spacing, add blank line
            if paragraphs and paragraphs[-1] != "":
                paragraphs.append("")
    return "\n\n".join(p for p in paragraphs if p != "")