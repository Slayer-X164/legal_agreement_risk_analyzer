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
    text = ""
    with pdfplumber.open(BytesIO(content)) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text


def extract_docx(content: bytes) -> str:
    doc = Document(BytesIO(content))
    return "\n".join([para.text for para in doc.paragraphs if para.text.strip()])