import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="text-black dark:text-gray-300 body-font sticky bottom-0" style={{background: 'linear-gradient(to right, #ffffff 0%, #fefcf7 30%, #fdf9eb 60%, #fbf4d6 80%, #f9f0c4 100%)'}}>
      <div className="border-t border-gray-300"></div>
      <div className="container flex items-center justify-between px-10 py-8 mx-auto">
        <span className="text-lg font-bold brand-color">
          VAMET INDUSTRIES © 2025 All Rights Reserved
        </span>
        <div className="flex space-x-6 text-sm">
          <Link href="/privacy-policy">
            <a className="brand-color brand-color-hover transition-colors duration-300 font-bold">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms-of-use">
            <a className="brand-color brand-color-hover transition-colors duration-300 font-bold">
              Terms of Use
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
