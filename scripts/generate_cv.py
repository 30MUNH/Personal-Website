import os
import sys
import subprocess
import shutil
from pathlib import Path

def find_browser():
    candidates = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    ]
    for path in candidates:
        if os.path.exists(path):
            return path
    for name in ["chrome", "msedge", "google-chrome", "chromium"]:
        p = shutil.which(name)
        if p:
            return p
    return None

def main():
    repo_root = Path(__file__).resolve().parent.parent
    template_path = repo_root / "scripts" / "cv-template.html"
    output_pdf = repo_root / "public" / "CV_NguyenDinhTienManh.pdf"

    if not template_path.exists():
        print(f"Error: Template not found at {template_path}")
        sys.exit(1)

    browser_exe = find_browser()
    if not browser_exe:
        print("Error: No Chromium-based browser (Chrome or Edge) found on system.")
        sys.exit(1)

    print(f"Using browser: {browser_exe}")
    template_uri = template_path.as_uri()
    print(f"Rendering template: {template_uri}")
    print(f"Output PDF target: {output_pdf}")

    cmd = [
        browser_exe,
        "--headless",
        "--disable-gpu",
        "--no-margins",
        "--run-all-compositor-stages-before-draw",
        "--no-pdf-header-footer",
        f"--print-to-pdf={str(output_pdf)}",
        template_uri
    ]

    print("Running command...")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print("Browser error output:", result.stderr)
        sys.exit(result.returncode)

    if not output_pdf.exists():
        print(f"Error: PDF was not generated at {output_pdf}")
        sys.exit(1)

    print(f"PDF successfully generated. File size: {output_pdf.stat().st_size:,} bytes")

    # Verify with pypdf
    try:
        import pypdf
        reader = pypdf.PdfReader(str(output_pdf))
        num_pages = len(reader.pages)
        print(f"Verification: PDF has {num_pages} page(s).")
        
        full_text = ""
        for idx, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            full_text += f"\n--- PAGE {idx + 1} ---\n" + text

        keywords = ["Vinsmart Future", "RoboPlanner", "LangGraph", "VinUni", "Vingroup", "SFIA"]
        missing = [kw for kw in keywords if kw.lower() not in full_text.lower()]
        
        if missing:
            print(f"Warning: Missing keywords: {missing}")
        else:
            print("Verification PASSED: All key ATS keywords found in PDF text!")

        if num_pages != 2:
            print(f"Warning: Expected exactly 2 pages, got {num_pages} pages.")
        else:
            print("Verification PASSED: Exactly 2 pages generated!")
            
    except Exception as e:
        print(f"Note on pypdf verification: {e}")

    # If dist folder exists, copy there too
    dist_pdf = repo_root / "dist" / "CV_NguyenDinhTienManh.pdf"
    if dist_pdf.parent.exists():
        shutil.copy2(output_pdf, dist_pdf)
        print(f"Synced PDF to {dist_pdf}")

if __name__ == "__main__":
    main()
