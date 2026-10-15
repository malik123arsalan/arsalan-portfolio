#!/usr/bin/env python3
"""
Launcher script for Arsalan Mustafa Malik's Portfolio.
Allows running the project locally with standard Python tools.

Usage:
    python run.py
"""

import os
import sys
import subprocess

def main():
    print("=" * 60)
    print("  ARSALAN MUSTAFA MALIK — AGENTIC AI & D2C PORTFOLIO")
    print("=" * 60)
    print("Python Runtime:", sys.version.split()[0])
    print("\nStarting Python FastAPI Backend Server...")
    
    backend_file = os.path.join(os.path.dirname(__file__), "backend", "main.py")
    
    try:
        import uvicorn
        print("Uvicorn detected. Starting FastAPI on http://localhost:8000 ...")
        subprocess.run([sys.executable, "-m", "uvicorn", "backend.main:app", "--reload", "--port", "8000"])
    except ImportError:
        print("\nNotice: Uvicorn not installed in current environment.")
        print("To install backend dependencies, run:")
        print("    pip install -r backend/requirements.txt")
        print("\nOr to build the web frontend for Cloudflare Pages:")
        print("    npm run build")

if __name__ == "__main__":
    main()
