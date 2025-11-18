import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap, PieChart } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-8 text-center max-w-4xl px-4">
        {/* Badge */}
        <Badge variant="secondary" className="px-4 py-1.5 text-sm">
          🚀 Smart Budget Management Made Simple
        </Badge>

        {/* Main Headline */}
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Take Control of Your
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            BudgetPoint helps you track expenses, set goals, and make smarter financial decisions with powerful insights and real-time analytics.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mt-4">
          <Button asChild size="lg" className="w-full sm:w-auto text-base group">
            <Link href="/auth/sign-up">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base">
            <Link href="/auth/login">
              Sign In
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Bank-level security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>Real-time sync</span>
          </div>
          <div className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span>Smart analytics</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl px-4 mt-8">
        <div className="flex flex-col gap-3 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Track & Analyze</h3>
          <p className="text-muted-foreground">
            Monitor your spending patterns with beautiful charts and gain insights into where your money goes.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <PieChart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Budget Planning</h3>
          <p className="text-muted-foreground">
            Set realistic budgets for different categories and get alerts when you're approaching limits.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Secure & Private</h3>
          <p className="text-muted-foreground">
            Your financial data is encrypted and protected with industry-leading security standards.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="flex flex-col gap-12 w-full max-w-5xl px-4 mt-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How BudgetPoint Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and take control of your finances with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold">Create Your Account</h3>
            <p className="text-muted-foreground">
              Sign up for free in seconds. No credit card required. Start managing your budget immediately.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold">Add Your Expenses</h3>
            <p className="text-muted-foreground">
              Log your daily expenses and income. Categorize transactions to understand your spending habits better.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold">Track & Optimize</h3>
            <p className="text-muted-foreground">
              View detailed reports, set budget goals, and get insights to make smarter financial decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose BudgetPoint Section */}
      <div className="flex flex-col gap-8 w-full max-w-5xl px-4 mt-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BudgetPoint?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your personal finances in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4 p-6 rounded-lg border bg-card">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              📊
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Visual Reports & Charts</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful, easy-to-understand charts and graphs that show exactly where your money is going each month.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg border bg-card">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              🎯
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Goal Setting & Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Set savings goals and track your progress. Stay motivated with visual progress indicators and milestones.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg border bg-card">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              🔔
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Smart Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Get alerts when you're approaching budget limits or when unusual spending patterns are detected.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg border bg-card">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              💼
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Multiple Categories</h3>
              <p className="text-sm text-muted-foreground">
                Organize expenses into custom categories. Track everything from groceries to entertainment to utilities.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg border bg-card">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              📱
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Mobile Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Access your budget anywhere, anytime. Fully responsive design works perfectly on all devices.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg border bg-card">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              📈
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Trend Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Identify spending trends over time. See monthly comparisons and understand your financial patterns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-6 w-full max-w-3xl px-4 mt-16 text-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Take Control?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of users who have already transformed their financial lives with BudgetPoint. Start your journey to financial freedom today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto text-base group">
            <Link href="/auth/sign-up">
              Start Free Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base">
            <Link href="/auth/login">
              Already have an account?
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
