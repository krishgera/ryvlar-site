import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import {ShimmeringText} from "@/components/animate-ui/text/shimmering";
import Footer from "@/components/custom/Footer";
import {Card, CardHeader} from "@/components/ui/card";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button";

export default function TermsNConditionsPage() {
    return (
        <div className="flex flex-col items-center justify-center pt-[20vh] gap-4">
            <ShimmeringText text={"Terms & Conditions"} className={"text-3xl"}/>
            <Accordion type="single" defaultValue={"item-1"} collapsible className="w-full max-w-5xl">
                <AccordionItem value="item-1">
                    <AccordionTrigger>1. Introduction</AccordionTrigger>
                    <AccordionContent>
                        Welcome to our cybersecurity platform. These Terms & Conditions govern your use of our website
                        and services. By accessing or using our services, you agree to comply with these Terms.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>2. Services Provided</AccordionTrigger>
                    <AccordionContent>
                        We provide cybersecurity insights, vulnerability detection, and related services. Some services
                        rely on third-party APIs such as DeHashed, Shodan, and Trivy for data collection and analysis.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>3. Use of Services</AccordionTrigger>
                    <AccordionContent>
                        You agree not to misuse our services, including but not limited to unauthorized scanning, data
                        misuse, or unlawful activities. You must comply with all applicable cybersecurity and data
                        protection laws.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>4. Third-Party APIs & Data</AccordionTrigger>
                    <AccordionContent>
                        Our services integrate with APIs such as DeHashed, Shodan, and Trivy. We do not control or
                        guarantee the accuracy, availability, or reliability of data from these providers. Your use must
                        also comply with their respective terms.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>5. User Responsibilities</AccordionTrigger>
                    <AccordionContent>
                        You are responsible for ensuring that you have proper authorization to scan or analyze systems.
                        Services must not be used for illegal or offensive hacking purposes.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>6. Privacy & Data Handling</AccordionTrigger>
                    <AccordionContent>
                        We may collect and process limited user data in accordance with our Privacy Policy. Please
                        review the policy to understand how your data is handled.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>7. Limitation of Liability</AccordionTrigger>
                    <AccordionContent>
                        We do not guarantee accuracy, uptime, or risk-free usage. We are not liable for damages, losses,
                        or consequences arising from reliance on our services.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger>8. Governing Law & Contact</AccordionTrigger>
                    <AccordionContent>
                        These Terms are governed by applicable Indian law. For questions or concerns, contact us
                        at: <br/>
                        <strong>Email:</strong> support@yourcyberfirm.com
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <p className="text-sm opacity-50 mt-8">
                Last updated: September 3, 2025
            </p>

            <div className="flex items-center justify-center gap-6 mt-6">
                <img src="/icons/gdpr.jpg" alt="GDPR Compliant" className="h-10 rounded-full"/>
                <img src="/icons/iso.jpg" alt="ISO Certified" className="h-12 rounded-full"/>
                <img src="/icons/ccpa.webp" alt="CCPA Compliant" className="h-10 rounded-full"/>
            </div>

            <Card className=" bg-transparent mt-24 p-6 min-w-xl rounded-lg text-center max-w-xl">
                <CardHeader>
                    <h3 className="text-lg font-medium mb-2">Still have questions?</h3>
                    <p className="mb-4 opacity-60">Reach out to our support team anytime.</p>
                    <a
                        href="mailto:support@ryvlar.com"
                    >
                        <InteractiveHoverButton className={" text-sm font-normal"}>
                            Contact Us
                        </InteractiveHoverButton>
                    </a>
                </CardHeader>

            </Card>
            <div className={"h-24"}/>
            <Footer/>
        </div>
    )
}