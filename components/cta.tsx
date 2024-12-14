import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Learning?</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Join LearnLens today and experience the power of personalized, adaptive learning content creation.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary">Get Started for Free</Button>
            <Button size="lg" variant="outline">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

