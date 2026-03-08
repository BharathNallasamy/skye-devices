import { useState } from "react";
import Footer from "../components/Footer";

const faqData = [
{
question: "What is Skye?",
answer:
"Skye is a small, portable tactile timer for people who struggle to stay focused while working, studying, or doing something important. Using subtle vibrations at user-defined intervals, Skye builds time awareness and gently brings your attention back to what’s in front of you, without screens or distractions."
},
{
question: "Why does Skye work?",
answer:
"Lack of focus isn’t a motivation problem. It’s a time awareness problem. Skye increases time awareness by marking time through gentle physical cues (subtle vibrations). Over time, this trains your brain to stay present for longer periods."
},
{
question: "Why should I buy Skye early?",
answer:
"We produce Skye in limited, made-to-order batches and ship devices in the order purchases are placed. Buying early means you're more likely to receive your Skye sooner."
},
{
question: "When will my Skye ship?",
answer:
"Skye is produced in small batches. Because of this, shipping times are typically between 2-3 weeks."
},
{
question: "Can I cancel my order or get a refund?",
answer:
"Skye is made to order. Once an order is placed it cannot be cancelled. However, if your device arrives damaged we will replace it at no cost."
},
{
question: "How can I track my order?",
answer:
"We will keep you posted with regular updates. If you need more details you can contact us anytime."
},
{
question: "Can I use Skye on the go?",
answer:
"Yes. Skye is small, portable, and designed for everyday life. Just slide it into your pocket and it helps you stay time-aware throughout the day."
},
{
question: "How long does the battery last?",
answer:
"On average it lasts up to 20 days on a full charge using the 15-minute mode."
},
{
question: "Does Skye connect to apps or other devices?",
answer:
"No. Skye is completely standalone. It does not connect to your phone or the internet."
},
{
question: "Does Skye support different focus styles?",
answer:
"Yes. Skye works with different work styles including Pomodoro and deep work sessions."
},
{
question: "What’s in the box?",
answer:
"Each package includes Skye, stickers, and a quick start guide."
}
];

export default function FAQPage() {

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (
<>
<section className="bg-white">

<div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">

<h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-[clamp(40px,6vh,80px)]">
Frequently Asked Questions
</h1>

<div className="space-y-6">

{faqData.map((faq, index) => (

<div
key={index}
className="border-b border-gray-200 pb-5"
>

<button
onClick={() => toggleFAQ(index)}
className="w-full text-left flex justify-between items-center text-[clamp(16px,1.1vw,18px)] font-medium text-gray-900"
>

<span>{index + 1}. {faq.question}</span>

<span className="text-xl">
{openIndex === index ? "−" : "+"}
</span>

</button>

{openIndex === index && (

<p className="mt-4 text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
{faq.answer}
</p>

)}

</div>

))}

</div>

</div>

</section>

<Footer />
</>
);
}