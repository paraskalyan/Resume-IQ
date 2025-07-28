import { FileText } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
            <Link className="flex items-center justify-center" href="#">
                <FileText className="h-6 w-6 mr-2" />
                <span className="font-bold">ResumeBuilder</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                    Features
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#templates">
                    Templates
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
                    Pricing
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                    Contact
                </Link>
            </nav>
        </header>
    )
}

export default Navbar