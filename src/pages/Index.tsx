import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Home, DollarSign, GraduationCap, Gift, Clock, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-help-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fadeIn">
              <div className="mb-4 inline-flex items-center bg-help-green/20 text-help-green px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">New Program Launched January 2, 2025</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0077CC]">
                FIRST-TIME HOMEBUYERS
              </h1>
              <div className="space-y-4">
                <p className="text-4xl text-[#0077CC]">Get up to</p>
                <p className="text-6xl font-bold text-[#8AB833] animate-pulse">$20,000</p>
                <p className="text-4xl text-[#0077CC]">for Down Payment<br />& Closing Costs*</p>
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#8AB833]" />
                  <p className="text-xl text-[#8AB833]">Limited Time Offer for 2025</p>
                </div>
                <p className="text-3xl font-italic text-[#8AB833]">ACT NOW</p>
                <p className="text-3xl text-[#0077CC]">FUNDS WON'T <span className="font-script text-[#8AB833]">Last!</span></p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/3f2c80c8-f63c-4287-8d8b-c9ed4a200950.png"
                alt="Family moving into their new home"
                className="rounded-lg shadow-xl animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-help-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-help-navy">
            2025 Program Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Up to $20,000 in Assistance",
                description: "Use towards down payment and closing costs in 2025.",
              },
              {
                icon: Home,
                title: "First-Time Homebuyers",
                description: "Exclusive program designed for first-time buyers.",
              },
              {
                icon: Gift,
                title: "Forgivable Grant",
                description: "No repayment required with 5-year retention.",
              },
              {
                icon: GraduationCap,
                title: "Income Limits Apply",
                description: "Based on household size and location.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fadeIn hover:scale-105 transform transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-help-blue" />
                <h3 className="text-xl font-semibold mb-2 text-help-navy">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-help-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-help-navy text-center">
              Don't Miss Out on This Limited-Time Opportunity
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Join the 2025 HELP Grant Program today and take the first step towards homeownership. Our representatives are ready to guide you through the process.
            </p>
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-help-navy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <img
              src="/lovable-uploads/3f2c80c8-f63c-4287-8d8b-c9ed4a200950.png"
              alt="Cornerstone Home Lending"
              className="h-12"
            />
            <p className="text-sm text-center md:text-left max-w-3xl">
              *The Homebuyer Equity Leverage Partnership (HELP) program, launched January 2, 2025, offers first-come, first-served forgivable grants of up to $20,000 in AR, LA, MS, and other states in which Cornerstone is registered. Household income limits, 5-year home retention agreement, and other requirements apply; see loan officer for details. Not a commitment to lend.
            </p>
            <div className="flex gap-4">
              <img src="/member-fdic.png" alt="Member FDIC" className="h-8" />
              <img src="/equal-housing-lender.png" alt="Equal Housing Lender" className="h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;