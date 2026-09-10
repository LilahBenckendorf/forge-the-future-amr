from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_PATH = OUTPUT_DIR / "forge-the-future-flyer.pdf"
HERO_PATH = ROOT / "public" / "hero.png"
QR_PATH = ROOT / "public" / "forge-the-future-qr.png"
EVENT_URL = "https://forge-the-future-amr.lilahbenckendorf.chatgpt.site"
CONTACT_URL = (
    "mailto:lilahbenckendorf@berkeley.edu,tim@advancedmetalresearch.com"
    "?subject=Forge%20the%20Future%20Berkeley%20-%20question"
    "&body=Hi%20Lilah%20and%20Tim%2C%0A%0AI%20have%20a%20question%20about%20Forge%20the%20Future%20at%20The%20Glade.%0A%0A"
)

PAGE_W, PAGE_H = letter
INK = HexColor("#090B0C")
CHARCOAL = HexColor("#171514")
PAPER = HexColor("#FAF6EE")
COPPER = HexColor("#FF7A28")
RED = HexColor("#B81C1C")
MUTED = HexColor("#625C56")
WHITE = HexColor("#FFFFFF")


def pill(c: canvas.Canvas, x: float, y: float, label: str) -> float:
    font = "Helvetica-Bold"
    size = 7.2
    width = stringWidth(label, font, size) + 20
    c.setStrokeColor(HexColor("#C9C1B6"))
    c.setLineWidth(0.6)
    c.rect(x, y, width, 24, stroke=1, fill=0)
    c.setFillColor(CHARCOAL)
    c.setFont(font, size)
    c.drawString(x + 10, y + 8.2, label)
    return width


def build_flyer() -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT_PATH), pagesize=letter, pageCompression=1)
    c.setTitle("Forge the Future - Berkeley Engineering Event")
    c.setAuthor("Advanced Metal Research")
    c.setSubject("Thursday, September 10 at 6:00 PM at The Glade in Berkeley")

    hero_h = 344
    c.drawImage(
        str(HERO_PATH),
        0,
        PAGE_H - hero_h,
        width=PAGE_W,
        height=hero_h,
        preserveAspectRatio=False,
        mask="auto",
    )

    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H - hero_h, stroke=0, fill=1)

    x = 44
    c.setFillColor(RED)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x, 420, "FOR ENGINEERS WHO BUILD THE WHOLE SYSTEM")

    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 31)
    c.drawString(x, 382, "MECHANICS MEET")
    c.setFillColor(RED)
    c.setFont("Times-Italic", 31)
    c.drawString(x, 348, "machine intelligence.")

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 10.8)
    c.drawString(x, 320, "A focused evening connecting mechanical design and mechatronics with")
    c.drawString(x, 304, "metallurgy, AI, sensing, inspection and robotic welding.")

    pill_x = x
    for label in ["ADVANCED MANUFACTURING", "METALLURGY", "AI", "ROBOTICS"]:
        pill_x += pill(c, pill_x, 263, label) + 7

    card_x, card_y, card_w, card_h = 44, 92, 524, 138
    c.setFillColor(CHARCOAL)
    c.rect(card_x, card_y, card_w, card_h, stroke=0, fill=1)
    c.setFillColor(COPPER)
    c.rect(card_x, card_y, 5, card_h, stroke=0, fill=1)

    c.setFillColor(COPPER)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(65, 204, "BEYOND THE EVENT / POTENTIAL INTERNSHIPS")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(65, 177, "BUILD HARDWARE NEXT TO SPACEX.")
    c.setFillColor(HexColor("#B9B8B5"))
    c.setFont("Helvetica", 8.4)
    c.drawString(65, 153, "Explore possible hands-on opportunities at AMR's")
    c.drawString(65, 139, "Hawthorne shop, directly next to SpaceX headquarters.")
    c.setFillColor(HexColor("#777A7B"))
    c.setFont("Helvetica", 6.7)
    c.drawString(65, 112, "Opportunities depend on AMR availability and selection.")

    qr_x, qr_y, qr_size = 447, 111, 102
    c.setFillColor(WHITE)
    c.rect(qr_x - 6, qr_y - 6, qr_size + 12, qr_size + 12, stroke=0, fill=1)
    c.drawImage(str(QR_PATH), qr_x, qr_y, width=qr_size, height=qr_size, mask="auto")
    c.linkURL(EVENT_URL, (qr_x - 6, qr_y - 6, qr_x + qr_size + 6, qr_y + qr_size + 6), relative=0)
    c.setFillColor(COPPER)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(qr_x, 218, "EVENT PAGE")

    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(44, 57, "NO INVITATION REQUIRED")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.1)
    c.drawString(44, 45, "Questions or internship interest? Email both organizers:")
    c.setFont("Helvetica-Bold", 6.7)
    c.drawString(44, 31, "lilahbenckendorf@berkeley.edu  /  tim@advancedmetalresearch.com")
    c.setFillColor(RED)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawRightString(568, 57, "THE GLADE / BERKELEY")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.2)
    c.drawRightString(568, 42, "THURSDAY / SEP 10 / 6:00 PM")
    c.linkURL(CONTACT_URL, (44, 25, 380, 52), relative=0)

    c.showPage()
    c.save()
    return OUTPUT_PATH


if __name__ == "__main__":
    print(build_flyer())
