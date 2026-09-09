import re
import os

def check_file(filepath):
    content = open(filepath).read()
    # Find ALL strings ending in image extensions
    matches = re.findall(r'"([^"]+\.(jpg|jpeg|png|JPG|JPEG|PNG|mp4|webm))"', content)
    matches += re.findall(r"'([^']+\.(jpg|jpeg|png|JPG|JPEG|PNG|mp4|webm))'", content)
    
    for match in matches:
        img_path = match[0]
        # Ignore external URLs
        if img_path.startswith("http"): continue
        
        # Check for leading slash
        if not img_path.startswith("/"):
            print(f"MISSING LEADING SLASH: {img_path} in {filepath}")
            local_path = "public/" + img_path
        else:
            local_path = "public" + img_path
            
        if not os.path.exists(local_path):
            print(f"MISSING: {img_path} in {filepath}")
        else:
            # Check case sensitivity
            dir_path, file_name = os.path.split(local_path)
            actual_files = os.listdir(dir_path)
            if file_name not in actual_files:
                print(f"CASE MISMATCH: {img_path} in {filepath}. Actual files: {actual_files}")

check_file('lib/case-studies.ts')
check_file('app/gallery/gallery-client.tsx')
