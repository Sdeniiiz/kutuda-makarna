import base64
import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.print_page_options import PrintOptions

def generate_pdf():
    html_path = os.path.abspath(r"D:\kutuda_makana_website\docs\kutuda-makarna-tasarim-belgesi.html")
    pdf_path = os.path.abspath(r"D:\kutuda_makana_website\docs\Kutuda_Makarna_Tasarim_ve_Deneyim_Master_Belgesi.pdf")

    print(f"Loading HTML: {html_path}")
    options = Options()
    options.add_argument('--headless=new')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--window-size=1920,1080')

    driver = webdriver.Chrome(options=options)
    try:
        driver.get(f"file:///{html_path.replace(os.sep, '/')}")
        time.sleep(2) # Allow fonts & images to render

        print_options = PrintOptions()
        print_options.orientation = 'portrait'
        print_options.page_ranges = ['1-8']

        # Print page using Chrome DevTools Protocol in Selenium
        pdf_b64 = driver.print_page(print_options)
        pdf_bytes = base64.b64decode(pdf_b64)

        with open(pdf_path, 'wb') as f:
            f.write(pdf_bytes)

        print(f"Successfully generated PDF: {pdf_path} ({len(pdf_bytes)} bytes)")
    finally:
        driver.quit()

if __name__ == '__main__':
    generate_pdf()
