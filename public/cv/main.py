from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, ListFlowable, ListItem, KeepTogether
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib.units import inch, mm
from reportlab.graphics.shapes import Drawing, Rect, String
from reportlab.graphics.charts.barcharts import HorizontalBarChart
from reportlab.graphics import renderPDF

# Path to save PDF
output_path = "Ahmed_Abidi_CV.pdf"
# Path to profile image (ensure the image exists in the same directory)
profile_image_path = "profile.jpg"

# Create document with modern margins
pdf = SimpleDocTemplate(output_path, pagesize=A4,
                        rightMargin=15*mm, leftMargin=15*mm,
                        topMargin=15*mm, bottomMargin=15*mm)

# Define professional color scheme
PRIMARY_COLOR = colors.HexColor('#1A365D')  # Professional dark blue
SECONDARY_COLOR = colors.HexColor('#2B6CB0')  # Professional blue
ACCENT_COLOR = colors.HexColor('#2D3748')  # Professional dark gray
LIGHT_GRAY = colors.HexColor('#ECF0F1')
DARK_GRAY = colors.HexColor('#4A5568')
CONTACT_COLOR = colors.HexColor('#2B6CB0')  # Professional blue for contact links

# Modern typography styles
styles = getSampleStyleSheet()

# Header styles
name_style = ParagraphStyle(
    name='Name',
    fontName='Helvetica-Bold',
    fontSize=24,
    leading=26,
    textColor=PRIMARY_COLOR,
    alignment=TA_CENTER,
    spaceAfter=3
)

title_style = ParagraphStyle(
    name='Title',
    fontName='Helvetica',
    fontSize=12,
    leading=14,
    textColor=DARK_GRAY,
    alignment=TA_CENTER,
    spaceAfter=10
)

# Section header style
section_header_style = ParagraphStyle(
    name='SectionHeader',
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=13,
    textColor=PRIMARY_COLOR,
    spaceBefore=8,
    spaceAfter=4,
    borderWidth=0,
    borderColor=SECONDARY_COLOR,
    borderPadding=0,
    leftIndent=0
)

# Content styles
content_style = ParagraphStyle(
    name='Content',
    fontName='Helvetica',
    fontSize=8,
    leading=10,
    textColor=colors.black,
    spaceAfter=3,
    alignment=TA_JUSTIFY
)

contact_style = ParagraphStyle(
    name='Contact',
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=ACCENT_COLOR,
    alignment=TA_CENTER,
    spaceAfter=3
)

job_title_style = ParagraphStyle(
    name='JobTitle',
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=11,
    textColor=PRIMARY_COLOR,
    spaceAfter=1
)

company_style = ParagraphStyle(
    name='Company',
    fontName='Helvetica',
    fontSize=8,
    leading=10,
    textColor=SECONDARY_COLOR,
    spaceAfter=2
)

# Function to create skill progress bar
def create_skill_bar(skill_name, level, width=120, height=6):
    """Create a compact progress bar for skills"""
    drawing = Drawing(width + 80, height + 12)
    
    # Skill name
    drawing.add(String(0, height + 2, skill_name, fontName='Helvetica', fontSize=8, fillColor=colors.black))
    
    # Background bar
    drawing.add(Rect(0, 0, width, height, fillColor=LIGHT_GRAY, strokeColor=None))
    
    # Progress bar
    progress_width = (level / 100) * width
    drawing.add(Rect(0, 0, progress_width, height, fillColor=SECONDARY_COLOR, strokeColor=None))
    
    return drawing

# Function to create section divider
def create_section_divider():
    """Create a visual section divider that spans the full width"""
    # Calculate available width (A4 width minus margins)
    available_width = A4[0] - 30*mm  # Account for left and right margins
    drawing = Drawing(available_width, 3)
    drawing.add(Rect(0, 0, available_width, 2, fillColor=SECONDARY_COLOR, strokeColor=None))
    return drawing

# Function to create stylized section header
def create_section_header(title, icon="▶"):
    """Create a stylized section header with icon"""
    header_style = ParagraphStyle(
        name='StylizedSectionHeader',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=PRIMARY_COLOR,
        spaceBefore=16,
        spaceAfter=8,
        leftIndent=0
    )
    
    # Create the header with icon
    header_text = f'<font color="#2B6CB0">{icon}</font> <b>{title}</b>'
    header_para = Paragraph(header_text, header_style)
    
    return header_para

# Story holds the flowables
elements = []

# Header Section
elements.append(Paragraph('AHMED ABIDI', name_style))
elements.append(Paragraph('Software Developer | AI Innovator | Web & Mobile Engineer', title_style))

# Contact Information with professional layout and clear labels
contact_data = [
    [
        Paragraph('<b>Website:</b> <a href="https://www.abidiahmed.com"><font color="#2B6CB0">abidiahmed.com</font></a>', contact_style),
        Paragraph('<b>Email:</b> <a href="mailto:contact@abidiahmed.com"><font color="#2B6CB0">contact@abidiahmed.com</font></a>', contact_style),
        Paragraph('<b>Phone:</b> <a href="tel:+21620022670"><font color="#2B6CB0">+216 20 022 670</font></a>', contact_style)
    ],
    [
        Paragraph('<b>GitHub:</b> <a href="https://github.com/Psalpha1/"><font color="#2B6CB0">github.com/Psalpha1</font></a>', contact_style),
        Paragraph('<b>Twitter:</b> <a href="https://x.com/Hundle_o"><font color="#2B6CB0">x.com/Hundle_o</font></a>', contact_style),
        Paragraph('<b>Upwork:</b> <a href="https://upwork.com/freelancers/~01e261e981175af1ae?mp_source=share"><font color="#2B6CB0">upwork.com/freelancers/~01e261e981175af1ae</font></a>', contact_style)
    ]
]

contact_table = Table(contact_data, colWidths=[170, 170, 170])
contact_table.setStyle(TableStyle([
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('TOPPADDING', (0, 0), (-1, -1), 4),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ('RIGHTPADDING', (0, 0), (-1, -1), 8),
]))

elements.append(contact_table)
elements.append(Spacer(1, 8))

# Professional Summary
elements.append(create_section_divider())
elements.append(create_section_header('PROFESSIONAL SUMMARY', '📋'))
summary_text = (
    "Experienced mobile and web developer with a strong background in Flutter, React, and AI integration. "
    "Successfully delivered over 5 projects, serving more than 5,000 users, with a 100% client satisfaction rate on Upwork. "
    "Skilled in developing cross-platform solutions, real-time systems, and utilizing modern web technologies."
)
elements.append(Paragraph(summary_text, content_style))
elements.append(Spacer(1, 6))

# Two-column layout for main content
def create_left_column():
    left_elements = []
    
    # Skills Section with Progress Bars
    left_elements.append(create_section_header('TECHNICAL SKILLS', '⚡'))
    
    # Programming Languages
    left_elements.append(Paragraph('<b>Programming Languages</b>', job_title_style))
    skills_data = [
        ('HTML5/CSS3', 100),        
        ('JavaScript', 100),
        ('PHP', 100),
        ('SQL', 100),
        ('Dart', 90),
        ('TypeScript', 80),
        ('Python', 80)
    ]
    
    for skill, level in skills_data:
        left_elements.append(create_skill_bar(skill, level))
        left_elements.append(Spacer(1, 1))
    
    left_elements.append(Spacer(1, 4))
    
    # Frameworks & Tools
    left_elements.append(Paragraph('<b>Frameworks & Tools</b>', job_title_style))
    frameworks_data = [
        ('Flutter', 95),
        ('React', 90),
        ('Next.js', 85),
        ('Node.js', 85),
        ('React Native', 85)
    ]
    
    for skill, level in frameworks_data:
        left_elements.append(create_skill_bar(skill, level))
        left_elements.append(Spacer(1, 1))
    
    left_elements.append(Spacer(1, 4))
    
    # Databases
    left_elements.append(Paragraph('<b>Databases</b>', job_title_style))
    db_ai_data = [
        ('MySQL', 100),
        ('Firebase', 90),
        ('Supabase', 80)
    ]
    for skill, level in db_ai_data:
        left_elements.append(create_skill_bar(skill, level))
        left_elements.append(Spacer(1, 1))
    
    left_elements.append(Spacer(1, 5))
    
    # Education
    left_elements.append(create_section_header('EDUCATION', '🎓'))
    left_elements.append(Paragraph('<b>Bachelor of Science in Computer Science</b>', job_title_style))
    left_elements.append(Paragraph('Université de Gafsa (FSGF), Tunisia', company_style))
    left_elements.append(Paragraph('2025 – Present', content_style))
    left_elements.append(Spacer(1, 3))
    
    left_elements.append(Paragraph('<b>Baccalaureate in Computer Science</b>', job_title_style))
    left_elements.append(Paragraph('L.H.B.G, 2024 | Grade: 14.68/20', company_style))
    left_elements.append(Spacer(1, 5))
    
    # Certificates
    left_elements.append(create_section_header('CERTIFICATES', '🏆'))
    cert_text = (
        "• <a href='https://youssef.tn/certificate/ai-certificate.jpg'><font color='#2B6CB0'>AI Participation Certificate</font></a> – 2024<br/>"
        "• <a href='https://youssef.tn/certificate/certificate_bac.jpg.png'><font color='#2B6CB0'>Baccalaureate Certificate</font></a> – 2024"
    )
    left_elements.append(Paragraph(cert_text, content_style))
    left_elements.append(Spacer(1, 5))
    
    # Languages
    left_elements.append(create_section_header('LANGUAGES', '🌍'))
    lang_data = [
        ('Arabic', 100),
        ('English', 90),
        ('Deutsch', 70),
        ('French', 50)
    ]
    
    for lang, level in lang_data:
        left_elements.append(create_skill_bar(lang, level))
        left_elements.append(Spacer(1, 1))
    
    return left_elements

def create_right_column():
    right_elements = []
    
    # Experience
    right_elements.append(create_section_header('PROFESSIONAL EXPERIENCE', '💼'))
    right_elements.append(Paragraph('<b>Mobile & Web Developer | Upwork Freelancer</b>', job_title_style))
    right_elements.append(Paragraph('2025 – Present', company_style))
    
    exp_achievements = [
        "5+ projects completed with 100% client satisfaction",
        "Flutter/React applications serving 5,000+ active users",
        "AI applications achieving 92% accuracy rates",
        "Performance optimizations resulting in 40% improvements"
    ]
    
    for achievement in exp_achievements:
        right_elements.append(Paragraph(f"• {achievement}", content_style))
    
    right_elements.append(Spacer(1, 12))
    
    # Key Projects
    right_elements.append(create_section_header('KEY PROJECTS', '🚀'))
    
    projects = [
        {
            'name': 'Quotes AI',
            'desc': 'AI-powered quotes platform with categorized inspirational content and community features',
            'tech': 'HTML5, CSS3, JavaScript, PHP, MySQL, API, Canvas API, Google Cloud'
        },
        {
            'name': 'FitnessHub',
            'desc': 'Comprehensive fitness app with thousands of exercises, personalized workouts, and progress tracking',
            'tech': 'Flutter, Dart, JavaScript, HTML5, CSS3, API'
        },
        {
            'name': 'CTF Compass',
            'desc': 'CTF event tracker app built with Flutter and Dart.',
            'tech': 'Flutter, Dart, Firebase'
        },
        {
            'name': 'VoxLegends/VoxAgent',
            'desc': 'AI-powered chat applications for gaming with 90%+ accuracy',
            'tech': 'Flutter, AI/ML, TensorFlow'
        },
        {
            'name': 'TnChat',
            'desc': 'Real-time messaging platform supporting 1,500+ concurrent users',
            'tech': 'Flutter, Dart, Firebase, API'
        },
        {
            'name': 'SnapTools',
            'desc': 'Advanced image processing web application with 120K+ processed images',
            'tech': 'React, Canvas API, Computer Vision'
        },
        {
            'name': 'Link-Tree Platform',
            'desc': 'Social bio link management platform with custom analytics',
            'tech': 'HTML5, CSS3, TailwindCSS, JavaScript, PHP, MySQL'
        },
        {
            'name': 'Currex',
            'desc': 'Real-time currency exchange mobile application',
            'tech': 'Flutter, Dart, REST APIs'
        },
        {
            'name': 'Robot Car Interface',
            'desc': 'ML-powered control system with computer vision integration',
            'tech': 'Python, Flask, OpenCV, AI'
        },
        {
            'name': 'E-commerce Platform',
            'desc': 'Full-stack hardware store with payment integration',
            'tech': 'HTML5, CSS3, JavaScript, Backend APIs'
        },
        {
            'name': 'Game Hub',
            'desc': 'Interactive gaming platform with Canvas-based games',
            'tech': 'HTML5, CSS3, JavaScript, Canvas API'
        },
        {
            'name': 'Tarjemni Mobile',
            'desc': 'Cross-platform translation application',
            'tech': 'Flutter, Dart, Translation APIs'
        }
    ]
    
    for project in projects:
        right_elements.append(Paragraph(f"<b>{project['name']}</b>", job_title_style))
        right_elements.append(Paragraph(project['desc'], content_style))
        right_elements.append(Paragraph(f"<i>Technologies: {project['tech']}</i>", 
                                      ParagraphStyle('TechStyle', parent=content_style, 
                                                   textColor=SECONDARY_COLOR, fontSize=7)))
        right_elements.append(Spacer(1, 3))
    
    return right_elements

# Create column content
left_elements = create_left_column()
right_elements = create_right_column()

# Create nested tables for columns
left_data = [[element] for element in left_elements]
left_table = Table(left_data, colWidths=[None])
left_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
]))

right_data = [[element] for element in right_elements]
right_table = Table(right_data, colWidths=[None])
right_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
]))

# Calculate column widths
available_width = A4[0] - 30*mm  # Account for margins
left_col_width = available_width * 0.38  # 38% for left column
right_col_width = available_width * 0.62  # 62% for right column

# Create main two-column table
column_data = [[left_table, right_table]]
main_table = Table(column_data, colWidths=[left_col_width, right_col_width])
main_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (0, 0), 0),
    ('RIGHTPADDING', (0, 0), (0, 0), 10),
    ('LEFTPADDING', (1, 0), (1, 0), 10),
    ('RIGHTPADDING', (1, 0), (1, 0), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
]))

elements.append(main_table)

# Build the PDF
pdf.build(elements)
print(f"Modern CV generated successfully and saved to {output_path}")
