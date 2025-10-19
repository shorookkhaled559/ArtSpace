import React from 'react'

export default function Footer() {
  return (
    <>
          <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 py-6">
            {/* Left: copyright */}
            <div className="text-sm text-white">
              © 2024 Your Company, Inc. All rights reserved.
            </div>

            {/* Right: social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {/* Facebook SVG */}
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.25v-2.9h2.05V9.41c0-2.03 1.2-3.15 3.03-3.15.88 0 1.81.16 1.81.16v1.99h-1.02c-1.01 0-1.32.63-1.32 1.27v1.52h2.24l-.36 2.9h-1.88v7.03c4.78-.8 8.44-4.94 8.44-9.93z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {/* Instagram SVG */}
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <path d="M17.5 6.5h.01"></path>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {/* Twitter SVG */}
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 5.92c-.62.28-1.28.46-1.98.55.71-.42 1.26-1.08 1.52-1.86-.67.4-1.41.68-2.2.83A3.48 3.48 0 0016.5 4c-1.92 0-3.48 1.56-3.48 3.48 0 .27.03.54.09.8C9.5 8.05 6.1 6.34 3.9 3.6c-.3.52-.47 1.12-.47 1.76 0 1.21.62 2.28 1.56 2.9-.58-.02-1.12-.18-1.6-.44v.04c0 1.7 1.21 3.12 2.82 3.44-.29.08-.6.12-.92.12-.22 0-.44-.02-.65-.06.45 1.4 1.74 2.43 3.27 2.45A6.99 6.99 0 012 19.54 9.88 9.88 0 007.29 21c6.01 0 9.31-4.98 9.31-9.31v-.42c.64-.46 1.2-1.02 1.64-1.68-.58.26-1.19.43-1.83.51.66-.4 1.17-1.03 1.41-1.78z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {/* GitHub SVG */}
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.88 5.35.88 11.62c0 4.78 3.09 8.84 7.36 10.27.54.1.74-.23.74-.52 0-.25-.01-.92-.01-1.8-2.99.65-3.62-1.44-3.62-1.44-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.08 1.64 1.12 1.64 1.12.96 1.65 2.52 1.17 3.13.9.1-.7.38-1.17.69-1.44-2.39-.27-4.9-1.19-4.9-5.29 0-1.17.42-2.12 1.11-2.87-.11-.28-.48-1.42.11-2.96 0 0 .9-.29 2.95 1.1a10.2 10.2 0 012.68-.36c.91 0 1.82.12 2.67.36 2.04-1.39 2.94-1.1 2.94-1.1.59 1.54.22 2.68.11 2.96.7.75 1.11 1.7 1.11 2.87 0 4.11-2.52 5.01-4.92 5.27.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.19.63.75.52 4.27-1.43 7.36-5.49 7.36-10.27C23.12 5.35 18.27.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {/* YouTube SVG */}
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-1-1.69-1.02-2.1-1.08C16.9 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.6.3c-.41.06-1.31.09-2.1 1.08C.7 4.6.5 6.2.5 6.2S.2 8 .2 9.8v2.4c0 1.8.3 3.6.3 3.6s.2 1.6.8 2.3c.8 1 1.86 1 2.33 1.09 1.69.2 7.22.3 7.22.3s4.9 0 8.6-.3c.41-.06 1.31-.09 2.1-1.08.6-.7.8-2.3.8-2.3s.3-1.8.3-3.6v-2.4c0-1.8-.3-3.6-.3-3.6zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
