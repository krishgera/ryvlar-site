import {ShimmeringText} from "@/components/animate-ui/text/shimmering";
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "@/components/ui/accordion";
import Footer from "@/components/custom/Footer";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button";
import {Card, CardHeader} from "@/components/ui/card";

export default function PrivacyPolicy() {

    return (
        <div className={"flex flex-col items-center justify-start min-h-screen pt-[20vh]"}>
            <ShimmeringText text={"Privacy Policy"} className={"text-4xl"}/>
            <Accordion type="single" collapsible className="w-full max-w-4xl mt-10 ">
                <AccordionItem defaultChecked={true} value="intro">
                    <AccordionTrigger>Introduction</AccordionTrigger>
                    <AccordionContent>
                        <p className="opacity-60">
                            At Ryvlar, we value your privacy and are committed to protecting the information you share
                            with us.
                            This Privacy Policy outlines how we collect, use, and safeguard your data when you interact
                            with our services.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="info">
                    <AccordionTrigger>1. Information We Collect</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            We may collect personal information such as your name, email address, and contact details
                            when you
                            voluntarily provide them. Additionally, we may collect non-personal data like browser type,
                            device
                            information, and usage statistics.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="use">
                    <AccordionTrigger>2. How We Use Your Information</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            The information we collect is used to improve our services, personalize your experience, and
                            communicate important updates. We do not sell or rent your data to third parties.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security">
                    <AccordionTrigger>3. Data Security</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            We implement industry-standard security measures to protect your personal data. However, no
                            method
                            of transmission over the internet is 100% secure, and we cannot guarantee absolute
                            protection.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="changes">
                    <AccordionTrigger>4. Changes to This Policy</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page
                            with an
                            updated date to keep you informed.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact">
                    <AccordionTrigger>5. Contact Us</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            If you have any questions about our Privacy Policy, please contact us at support@ryvlar.com.
                        </p>
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