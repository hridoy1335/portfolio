import os

project_structure = {
    "portfolio-system": {
        "public": {
            "index.html": "",
            "style.css": "",
            "app.js": ""
        },
        "admin": {
            "login.html": "",
            "dashboard.html": "",
            "admin.js": ""
        },
        "firebase.json": "",
        "README.md": ""
    }
}

def create_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)

        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)
        else:
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Created file: {path}")

if __name__ == "__main__":
    create_structure(".", project_structure)
    print("\n✅ Portfolio system structure created successfully!")