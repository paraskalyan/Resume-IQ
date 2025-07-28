import { ArrowRight, Badge, CheckCircle, FileText, Star, Users, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Link } from 'react-router'
function Landing() {

    return (
        <div className="flex  flex-col min-h-screen">
            {/* Header */}


            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="w-fit">
                                        ATS Analyzer + Resume Generator
                                    </Badge>
                                    <h1 className="text-3xl font-bold  sm:text-5xl xl:text-6xl/none">
                                        Analyze Your Resume & Generate Job-Tailored Versions
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Upload your resume to get an instant ATS compatibility score, then generate perfectly tailored
                                        versions for any job description. Beat the bots and land more interviews.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-6 min-[400px]:flex-row">
                                    <Button size="lg" className="h-11 cursor-pointer">
                                        Check My ATS Score
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="lg" className="h-11 cursor-pointer bg-transparent">
                                        See How It Works
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        No credit card required
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Free forever plan
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    alt="Resume Preview"
                                    className="aspect-[3/4] overflow-hidden rounded-xl object-cover shadow-2xl"
                                    height="600"
                                    src="/placeholder.svg?height=600&width=450"
                                    width="450"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold sm:text-5xl">Everything You Need to Stand Out</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our resume builder comes packed with features designed to help you create the perfect resume
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <Card>
                                <CardHeader>
                                    <CheckCircle className="h-10 w-10 text-primary" />
                                    <CardTitle>ATS Score Analysis</CardTitle>
                                    <CardDescription>
                                        Upload your resume and get an instant compatibility score with detailed improvement suggestions
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Zap className="h-10 w-10 text-primary" />
                                    <CardTitle>Job-Tailored Generation</CardTitle>
                                    <CardDescription>
                                        Paste any job description and generate a perfectly customized resume that matches the requirements
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <FileText className="h-10 w-10 text-primary" />
                                    <CardTitle>Smart Optimization</CardTitle>
                                    <CardDescription>
                                        Our AI analyzes job keywords and optimizes your content for maximum ATS compatibility
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold  sm:text-5xl">How It Works</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Get your professional resume ready in just three simple steps
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                                    1
                                </div>
                                <h3 className="text-xl font-bold">Upload & Analyze</h3>
                                <p className="text-muted-foreground">
                                    Upload your current resume and get an instant ATS compatibility score with improvement tips
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                                    2
                                </div>
                                <h3 className="text-xl font-bold">Add Job Description</h3>
                                <p className="text-muted-foreground">
                                    Paste the job description you're targeting and let our AI analyze the requirements
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                                    3
                                </div>
                                <h3 className="text-xl font-bold">Generate Tailored Resume</h3>
                                <p className="text-muted-foreground">
                                    Get a perfectly optimized resume that matches the job requirements and beats ATS filters
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Templates Preview */}
                <section id="templates" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold  sm:text-5xl">Professional Templates</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Choose from our carefully crafted templates designed by HR professionals
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6 py-12 lg:grid-cols-3">
                            <Card className="overflow-hidden">
                                <img
                                    alt="Modern Template"
                                    className="aspect-[3/4] w-full object-cover"
                                    height="400"
                                    src="/placeholder.svg?height=400&width=300"
                                    width="300"
                                />
                                <CardHeader>
                                    <CardTitle>Modern</CardTitle>
                                    <CardDescription>Clean and contemporary design perfect for tech roles</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="overflow-hidden">
                                <img
                                    alt="Classic Template"
                                    className="aspect-[3/4] w-full object-cover"
                                    height="400"
                                    src="/placeholder.svg?height=400&width=300"
                                    width="300"
                                />
                                <CardHeader>
                                    <CardTitle>Classic</CardTitle>
                                    <CardDescription>Traditional format ideal for corporate positions</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="overflow-hidden">
                                <img
                                    alt="Creative Template"
                                    className="aspect-[3/4] w-full object-cover"
                                    height="400"
                                    src="/placeholder.svg?height=400&width=300"
                                    width="300"
                                />
                                <CardHeader>
                                    <CardTitle>Creative</CardTitle>
                                    <CardDescription>Eye-catching design for creative professionals</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className="flex justify-center">
                            <Button size="lg">
                                View All Templates
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold  sm:text-5xl">Trusted by Job Seekers Worldwide</h2>
                                <div className="flex items-center justify-center gap-8 text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5" />
                                        <span className="text-3xl font-bold text-foreground">50K+</span>
                                        <span>Users</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-5 w-5" />
                                        <span className="text-3xl font-bold text-foreground">100K+</span>
                                        <span>Resumes Created</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        <span className="text-3xl font-bold text-foreground">4.9</span>
                                        <span>Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold  sm:text-5xl">
                                    Ready to Beat the ATS and Land More Interviews?
                                </h2>
                                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of job seekers who have improved their ATS scores and landed interviews with our
                                    dual-powered resume tool
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex gap-2">
                                    <Input
                                        className="max-w-lg flex-1 bg-primary-foreground text-primary"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                    <Button type="submit" variant="secondary">
                                        Get Started
                                    </Button>
                                </form>
                                <p className="text-xs text-primary-foreground/60">Start for free. No credit card required.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}

export default Landing
