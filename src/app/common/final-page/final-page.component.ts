import { Component } from '@angular/core';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss'],
})
export class FinalPageComponent {
  constructor(public modalService: MainService) {}

  handleClick(type: string) {
    this.modalService.openModal(type);
  }
  // modalOpen = false;
  // modalTitle = '';
  // modalContent = '';

  // // Store your modal contents here
  // modalData: Record<string, { title: string; content: string }> = {
  //   contactUs: {
  //     title: 'Contact Us',
  //     content: `
  //     <p class="mb-2">We’d love to hear from you. Whether it’s a creative idea, a fun collaboration, or a business proposal, we’re always open to exploring new possibilities.</p>
  //     <p class="mb-2">Need support for your Skye? Write to us and our team will be happy to help.</p>
  //     <p class="mb-2">Interested in retailing Skye or partnering with us? Drop us a message and let’s start a conversation.</p>
  //     <p class="mb-2">📩 <b>Reach us at:</b> <a class="cursor white_space" href="mailto:skyedevices@outlook.com"> skyedevices@outlook.com</a></p>
  //     `,
  //   },
  //   faq: {
  //     title: 'FAQ - Frequently Asked Questions',
  //     content: `
  //       <p class="font-bold mb-3">1. What is Skye?</p>
  //       <p>
  //           Skye is a small, portable tactile timer designed to help you stay focused without screens or distractions. It gently vibrates at 5, 15, 30, or 60-minute intervals, helping you stay present and productive throughout your day.
  //       </p>
  //       <p class="font-bold mb-3">2. Why should I pre-order?</p>
  //       <p>
  //           Pre-orders are offered at a discounted rate as a token of appreciation for your support towards our small team in bringing this product to life. We will also begin shipping in the order that they were placed, meaning the earlier you pre-order, the sooner you can expect your Skye.
  //       </p>
  //       <p class="font-bold mb-3">3. How much does it cost?</p>
  //       <p class="mb-2">
  //           Pre-orders are available for ₹4,900 currently. This is a discounted rate for early supporters.
  //       </p>

  //       <p> At Skye, we believe in transparent, fair pricing. The pre-order price reflects the quality materials, thoughtful design, and careful made-to-order production process behind every device. There are no hidden costs — what you see is what you pay.</p>

  //       <p class="font-bold mb-3">4. When will my pre-order ship?</p>
  //       <p class="mb-2">
  //           The pre-orders are expected to ship starting 30 November 2025. We will contact you to confirm your shipping address as your delivery window approaches.
  //       </p>

  //       <p class="font-bold mb-3">5. Can I cancel or get a refund on my pre-orders?</p>
  //       <p class="mb-2">
  //           As a small business, we operate on a made-to-order model and carefully plan production based on confirmed pre-orders. Because of this, we are unable to cancel pre-orders and provide a refund once they are placed. This approach allows us to produce Skye responsibly, maintain quality, and minimize waste.
  //       </p>

  //       <p>Rest assured, if your device arrives defective or damaged, we will provide a free replacement.</p>
        
  //       <p class="font-bold mb-3">6. Will my pre-order definitely be delivered?</p>
  //       <p class="mb-2">
  //           Yes. Every confirmed pre-order is guaranteed to be delivered. We will produce and ship all confirmed orders starting from the expected shipping date, ensuring that each Skye reaches its rightful owner.
  //       </p>

  //       <p class="font-bold mb-3">7. How can I track the progress of Skye?</p>
  //       <p class="mb-2">
  //           We understand that pre-ordering a new product from a small team requires trust. To give you full confidence, we provide daily updates on production and progress, which you can follow on here.
  //       </p>

  //       <p>We are building Skye publicly and transparently. You can also follow all three founders on LinkedIn to see the journey firsthand. Our goal is to keep you informed every step of the way, so you can watch your device come to life with complete confidence.</p>

  //       <p class="font-bold mb-3">8. Can I use Skye while exercising or on the go?</p>
  //       <p class="mb-2">
  //           Yes. Skye is built with high-quality, durable materials for daily use, making it a long-term companion for mindful, distraction-free work. Its sleek, portable design allows you to carry it anywhere, and its gentle vibrations can alert you to intervals during workouts, meditation, or any focused activity.
  //       </p>

  //       <p class="font-bold mb-3">9. Who is Skye for?</p>
  //       <p class="mb-2">
  //           Skye is for anyone who wants to protect their focus and spend more time on what truly matters, whether at work, in studies, in creative flow, or in daily life.
  //       </p>

  //       <p class="font-bold mb-3">10. How long does Skye’s battery last?</p>
  //       <p class="mb-2">
  //           On average, Skye’s battery lasts up to 7 days, providing uninterrupted use throughout the week. It charges via USB, reaching approximately 80% capacity in 1 hour.
  //       </p>

  //       <p>For full technical specifications, including size, materials, and vibration intervals, see <b class="underline">here</b>.</p>

  //       <p class="font-bold mb-3">11. Can Skye integrate with apps or devices?</p>
  //       <p class="mb-2">
  //           No. Skye is intentionally screen-free and device-independent, helping you stay present and avoid digital distractions.
  //       </p>
  //       `,
  //   },
  //   terms: {
  //     title: 'Terms and Conditions',
  //     content: `
  //     <p class="font-bold mb-3">Last Updated: 11 August 2025</p>
  //     <p>At Skye Devices, we’re not just selling a product; we’re giving you back your most valuable resource -  your time. These terms aren’t here to trap you in legal jargon. They’re here to make sure you know exactly what to expect from us and what we expect from you.</p>

  //     <p class="font-bold mb-3">1. Introduction</p>
  //     <p class="mb-2">
  //         Skye is a product of <b>Skye Devices</b>, designed to help you reclaim your time and focus. Every product we create is built with intention, in small batches, to ensure quality and purpose.
  //     </p>
  //     <p class="font-bold mb-3">2. Eligibility to Purchase</p>
  //     <p class="mb-2">
  //         You must be <b>at least 18 years</b> of age or have the consent of a parent or guardian to place an order on our website. You must also provide accurate and complete information during the checkout process.
  //     </p>
  //     <p class="font-bold mb-3">3. Pricing and Payment</p>
  //     <div class="mb-2">
  //         <ul class="ul_list">
  //           <li class="list">All prices are listed in <b>Indian Rupees (₹)</b> unless otherwise stated.</li>
  //           <li class="list">We reserve the right to change prices without notice, but once an order is placed, the price is fixed for that order.</li>
  //           <li class="list">Payments are processed securely via our payment gateway.</li>
  //         </ul>
  //     </div>

  //     <p class="font-bold mb-3">4. Made-to-Order Manufacturing</p>
  //     <div class="mb-2">
  //         <ul class="ul_list">
  //           <li class="list">Skye is <b>produced in batches</b> to minimize waste and maintain consistent quality.</li>
  //           <li class="list">If our ideal batch size is <b>not reached</b>, we will still produce and deliver your order.</li>
  //           <li class="list">Smaller batches are less sustainable for us economically, but your order is <b>always guaranteed</b>.</li>
  //         </ul>
  //     </div>

  //     <p class="font-bold mb-3">5. Refund and Cancellation Policy</p>
  //     <p class="mb-2">
  //         Skye follows a made-to-order production model designed to minimize waste and maintain exceptional quality. Production begins once a batch is planned. If our targeted minimum order quantity is not reached, we will still produce and fulfill all confirmed orders.
  //     </p>
  //     <p class="mb-2">
  //         Due to this production approach, all orders are <b>non-refundable</b> and <b>cannot be canceled</b> once placed, except if the product arrives defective or damaged, in which case we will provide a free replacement.
  //     </p>
  //     <p class="mb-2">By purchasing, you acknowledge and support this model, enabling us to produce with purpose, reduce environmental impact, and deliver a product crafted specifically for you.</p>

  //     <p class="font-bold mb-3">6. Shipping and Delivery</p>
  //     <div class="mb-2">
  //         <ul class="ul_list">
  //           <li class="list">Estimated delivery timelines will be displayed at checkout.</li>
  //           <li class="list">We ship across India and to select international destinations.</li>
  //           <li class="list">International customers are responsible for any applicable customs duties or taxes.</li>
  //           <li class="list"><b>Order Confirmation:</b> Once your order is placed, you will receive a confirmation email containing your order details and the estimated delivery date for this pre-order.</li>
  //           <li class="list"><b>Delivery Updates:</b> As we near the delivery date, we will send follow-up emails with shipping details and final delivery timelines.</li>
  //           <li class="list">Skye operates on a <b>pre-order model</b>; the products will be delivered on or after the date communicated during purchase.</li>
  //           <li class="list">As an early-stage small business, each pre-order directly supports our ability to bring Skye to life. Your patience and trust mean the world to us.</li>
  //         </ul>
  //     </div>

  //     <p class="font-bold mb-3">7. Use of Product</p>
  //     <p class="mb-2">
  //       Our products are intended for personal use only. You may not modify, resell, or misuse the product in any way without our prior written consent.
  //     </p>

  //     <p class="font-bold mb-3">8. Intellectual Property</p>
  //     <p class="mb-2">
  //       All product designs, branding, content, and materials are the exclusive property of <b>Muphile Labs</b>. Any unauthorized reproduction, distribution or use in any from is prohibited. Legal action will be pursued against any infringement.
  //     </p>

  //     <p class="font-bold mb-3">9. Limitation of Liability</p>
  //     <p class="mb-2">
  //       Our liability is limited to the amount paid by you for the product. We are not liable for indirect, incidental, or consequential damages arising from the use or inability to use our products.
  //     </p>

  //     <p class="font-bold mb-3">10. Governing Law and Jurisdiction</p>
  //     <p class="mb-2">
  //       These Terms are governed by and construed under the laws of India. Any disputes will be subject to the jurisdiction of the courts in Chennai, Tamil Nadu.
  //     </p>

  //     <p class="font-bold mb-3">11. Contact Information</p>
  //     <p class="mb-2">
  //       If you have any questions regarding these Terms & Conditions given above, please contact us at <b>skyedevices@outlook.com</b>
  //     </p>

  //     `,
  //   },
  //   privacy: {
  //     title: 'Privacy Policy',
  //     content: `
  //     <p class="mb-2">We didn’t just build Skye to help you focus - we built it to help you reclaim what’s yours. Your privacy. Your time. Your mind. And that’s a promise we’ll keep.</p>
      
  //     <p class="mb-2">Your privacy matters to us. At <b>Skye Devices</b>, we are committed to protecting the personal information you share with us when you use our website, <b>https://skyedevices.com/</b>, or purchase our products and services.</p>

  //     <p class="font-bold mb-3">1. Information We Collect</p>
  //     <p class="mb-1">We collect personal information only when it’s necessary to provide our services to you, such as:</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">Name, delivery address, email, and phone number for order fulfillment.</li>
  //     <li class="list">Payment details are processed securely through our payment partner <b>Razorpay</b>.</li>
  //     <li class="list">Basic usage information (e.g., website analytics) to improve our services.</li>
  //     </ul>
  //     </div>
  //     <p class="mb-1">We always collect data fairly and lawfully, with your knowledge and consent.</p>

  //     <p class="font-bold mb-3">2. How We Use Your Information</p>
  //     <p class="mb-1">We use your information to:</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">Process and deliver your orders.</li>
  //     <li class="list">Provide customer support and respond to inquiries.</li>
  //     <li class="list">Send important service updates (e.g., order status, delivery schedules).</li>
  //     <li class="list">Improve our website, products, and customer experience.</li>
  //     </ul>
  //     </div>
      
  //     <p class="mb-1">We never sell or rent your personal information.</p>
      
  //     <p class="font-bold mb-3">3. Data Storage and Security</p>
  //     <p class="mb-2">We retain your data only for as long as necessary to fulfill the purposes outlined above. We protect stored data using commercially acceptable security measures to prevent loss, theft, unauthorized access, disclosure, copying, or alteration.</p>

  //     <p class="font-bold mb-3">4. Sharing Your Information</p>
  //     <p class="mb-1">We do not share personally identifying information publicly or with third parties, except:</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">When required by law.</li>
  //     <li class="list">With trusted service providers (e.g., delivery partners, payment processors) solely for fulfilling your order.</li>
  //     </ul>
  //     </div>

  //     <p class="font-bold mb-3">5. Third-Party Links</p>
  //     <p class="mb-2">Our website may contain links to external sites that we do not operate. We are not responsible for their content or privacy practices, so we encourage you to review their policies.</p>

  //     <p class="font-bold mb-3">6. Your Rights</p>
  //     <p class="mb-1">You can:</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">Request a copy of the personal data we hold about you.</li>
  //     <li class="list">Ask us to correct or delete your data, subject to legal or contractual obligations.</li>
  //     <li class="list">Opt out of marketing communications at any time.</li>
  //     </ul>
  //     </div>

  //     <p class="font-bold mb-3">7. Changes to This Policy</p>
  //     <p class="mb-2">We may update this policy from time to time. Any changes will be posted on this page with the updated effective date.</p>

  //     <p class="mb-2"><b>Contact Us:</b> If you have questions about this policy or how we handle your data, please contact us at <b>skyedevices@outlook.com</b></p>

  //     <p class="mb-2"><b>Effective Date: 11 August 2025</b></p>
  //     `,
  //   },
  //   refund: {
  //     title: 'Cancellation & Refund Policy',
  //     content: `
  //     <p class="font-bold mb-3">1. Non-Refundable Orders</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">All purchases of Skye are <b>final and non-refundable</b>.</li>
  //     <li class="list">This is because we operate on a <b>pre-order production model</b> - each unit is made specifically for confirmed orders once we reach or near our production batch requirements.</li>
  //     </ul>
  //     </div>
  //     <p class="font-bold mb-3">2. Why This Matters</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">Early cancellations significantly impact our production economics as a small business.</li>
  //     <li class="list">Even if we don’t meet our targeted minimum orders, <b>we will still produce and deliver your order</b>, but producing smaller batches is less sustainable for us. Your commitment helps us make Skye a reality for everyone.</li>
  //     </ul>
  //     </div>
  //     <p class="font-bold mb-3">3. Exceptional Cases</p>
  //     <p class="font-bold mb-2">Refunds or cancellations may be considered only in cases of:</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">Duplicate transactions were made by mistake.</li>
  //     <li class="list">Non-fulfillment of the order due to unforeseen circumstances from our side.</li>
  //     </ul>
  //     </div>

  //     <p class="mb-2">In such cases, please contact our support team at skyedevices@outlook.com within 48 hours of placing the order.</p>
  //     `,
  //   },
  //   shipping: {
  //     title: 'Shipping & Delivery Policy',
  //     content: `
      
  //     <p class="font-bold mb-3">1. Shipping Locations</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">We ship <b>across India</b> and to select international destinations.</li>
  //     <li class="list">International customers are responsible for <b>any applicable customs duties or taxes</b> in their country.</li>
  //     </ul>
  //     </div>
  //     <p class="font-bold mb-3">2. Pre-Order Delivery Timeline</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">Estimated delivery timelines will be displayed at checkout.</li>
  //     <li class="list">Skye operates on a <b>pre-order model</b> - your product will be delivered <b>on or after the estimated date</b> provided during purchase.</li>
  //     </ul>
  //     </div>
  //     <p class="font-bold mb-3">3. Order Confirmation & Updates</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list">Once your order is placed, you will receive a <b>confirmation email</b> with your order details and estimated delivery date.</li>
  //     <li class="list">As we get closer to shipping, you’ll receive a <b>follow-up email</b> with delivery details, tracking information, and final timelines.</li>
  //     </ul>
  //     </div>
  //     <p class="font-bold mb-3">4. Why Pre-Orders Matter</p>
  //     <div class="mb-2">
  //     <ul class="ul_list">
  //     <li class="list"><b>Pre-Orders</b> allow us to produce Skye sustainably and keep costs fair.</li>
  //     <li class="list">Your support in waiting for the delivery date helps us fight the “attention economy” and bring Skye into the world.</li>
  //     </ul>
  //     </div>
      
  //     `,
  //   },
  // };

  // openModal(type: string) {
  //   if (this.modalData[type]) {
  //     this.modalTitle = this.modalData[type].title;
  //     this.modalContent = this.modalData[type].content;
  //     this.modalOpen = true;
  //   }
  // }

  // closeModal() {
  //   this.modalOpen = false;
  // }

  instagramUrl: string =
    'https://www.instagram.com/skye.devices?igsh=Z29yaXkwbnRhaDlt&utm_source=qr';
  linkedinUrl: string = 'https://www.linkedin.com/company/skye-devices/';
  emailAddress: string = 'skyedevices@outlook.com';

  openLink(url: string) {
    window.open(url, '_blank');
  }

  openEmail() {
    window.open(`mailto:${this.emailAddress}`, '_self');
  }
}
