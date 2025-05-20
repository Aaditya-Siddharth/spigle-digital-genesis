
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Service data
const serviceData = {
  "web-development": {
    title: "Web Application Development",
    description: "Transforming digital landscapes, one pixel at a time. We craft web experiences that don't just look amazing—they drive your business forward with precision and passion.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    services: [
      "Landing Pages",
      "E-Commerce Applications",
      "Booking & Reservation Platforms",
      "Business & Corporate Websites",
      "Portfolio & Showcase Sites",
      "Educational & Learning Platforms",
      "Custom Web Applications"
    ],
    approach: [
      "Discovery & Requirements Analysis",
      "UX/UI Design & Prototyping",
      "Agile Development Process",
      "Rigorous Quality Assurance",
      "Seamless Deployment",
      "Ongoing Support & Optimization"
    ],
    specialties: [
      {
        icon: "🔥",
        title: "Customized Solutions",
        description: "Tailored web solutions that precisely match your unique business requirements and vision."
      },
      {
        icon: "⚙️",
        title: "Expert Team",
        description: "Skilled professionals with deep expertise in cutting-edge web technologies and design."
      },
      {
        icon: "🏆",
        title: "Client First Approach",
        description: "Your goals and satisfaction are our top priority, with transparent communication throughout."
      },
      {
        icon: "💰",
        title: "Fair and Affordable Pricing",
        description: "Competitive pricing models that provide exceptional value without compromising quality."
      },
      {
        icon: "🤝",
        title: "Strategic Partnership",
        description: "We don't just deliver projects; we build long-term relationships that drive your continued digital success."
      }
    ],
    potentials: [
      {
        title: "Strategy-Driven",
        description: "Aligned with your business goals"
      },
      {
        title: "Data-Informed",
        description: "Insights that drive decision-making"
      },
      {
        title: "Scalable",
        description: "Solutions that grow with you"
      },
      {
        title: "Future-Ready",
        description: "Continuous innovation and support"
      }
    ],
    faqs: [
      {
        question: "How long does it typically take to develop a website?",
        answer: "The timeline varies based on complexity and requirements. A simple informational website might take 2-4 weeks, while complex e-commerce or custom web applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "Do you provide website maintenance services after launch?",
        answer: "Absolutely! We offer various maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our support includes regular updates, security monitoring, performance optimization, and content updates."
      },
      {
        question: "What technologies do you use for web development?",
        answer: "We're technology-agnostic and select the best stack for your specific needs. We commonly work with React, Angular, Vue.js, Node.js, Python, PHP, and Ruby on Rails. For content management, we offer solutions with WordPress, Drupal, or custom CMS development."
      },
      {
        question: "How do you ensure my website will be mobile-friendly?",
        answer: "We follow a mobile-first design approach, ensuring your website performs flawlessly across all devices. Our responsive design practices, combined with rigorous testing on multiple devices and screen sizes, guarantee an optimal experience for all users."
      }
    ]
  },
  "app-development": {
    title: "Mobile App Development",
    description: "Bringing your ideas to life with native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    services: [
      "iOS Native Applications",
      "Android Native Applications",
      "Cross-Platform Development",
      "Progressive Web Apps",
      "Enterprise Mobile Solutions",
      "Mobile App Redesign",
      "App Maintenance & Support"
    ],
    approach: [
      "Market Research & Competition Analysis",
      "User Experience Design",
      "Technical Architecture Planning",
      "Iterative Development Process",
      "Comprehensive Testing",
      "App Store Submission & Optimization",
      "Post-Launch Support & Updates"
    ],
    specialties: [
      {
        icon: "🚀",
        title: "Performance Optimized",
        description: "Apps built for speed, responsiveness, and smooth user experiences even under heavy loads."
      },
      {
        icon: "🎨",
        title: "Beautiful Design",
        description: "Intuitive and engaging user interfaces that follow platform-specific design guidelines."
      },
      {
        icon: "🔒",
        title: "Security First",
        description: "Enterprise-grade security measures to protect user data and ensure privacy compliance."
      },
      {
        icon: "📱",
        title: "Cross-Platform Excellence",
        description: "Expertise in both native and cross-platform technologies to suit your specific requirements."
      },
      {
        icon: "⚡",
        title: "Rapid Development",
        description: "Efficient development methodologies that get your app to market faster without compromising quality."
      }
    ],
    potentials: [
      {
        title: "User-Centric",
        description: "Focused on solving user problems"
      },
      {
        title: "Innovative Features",
        description: "Leveraging latest mobile capabilities"
      },
      {
        title: "Integration-Ready",
        description: "Connects with your existing systems"
      },
      {
        title: "Analytics-Driven",
        description: "Built-in metrics for continuous improvement"
      }
    ],
    faqs: [
      {
        question: "Should I build a native app or a cross-platform app?",
        answer: "It depends on your specific requirements. Native apps offer the best performance and access to platform-specific features, while cross-platform apps are more cost-effective and faster to develop. We'll help you evaluate the pros and cons based on your business goals, target audience, and budget."
      },
      {
        question: "How much does it cost to develop a mobile app?",
        answer: "App development costs vary widely based on complexity, features, and platforms. Simple apps might start around $25,000-50,000, while complex enterprise apps can exceed $250,000. We provide detailed estimates after understanding your specific requirements and goals."
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer: "Typical development timelines range from 3-4 months for simple apps to 9-12 months for complex applications. We follow an agile methodology that allows for early testing and iterative improvements throughout the development process."
      },
      {
        question: "Do you provide app maintenance and updates after launch?",
        answer: "Yes, we offer comprehensive maintenance packages to ensure your app remains compatible with new OS versions, address any issues, and implement enhancements. We recommend regular updates to keep your app secure and relevant in the ever-changing mobile landscape."
      }
    ]
  },
  "branding": {
    title: "Strategic Brand Development",
    description: "Building memorable brand identities that connect with your audience and stand out in crowded markets. We transform businesses into beloved brands.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    services: [
      "Brand Strategy Development",
      "Visual Identity Design",
      "Brand Messaging & Voice",
      "Logo Design & Evolution",
      "Brand Guidelines",
      "Rebranding & Brand Refreshes",
      "Brand Asset Creation"
    ],
    approach: [
      "Brand Discovery Workshop",
      "Market & Competitor Analysis",
      "Target Audience Profiling",
      "Brand Positioning Strategy",
      "Creative Development & Iteration",
      "Brand Testing & Refinement",
      "Comprehensive Implementation"
    ],
    specialties: [
      {
        icon: "🔮",
        title: "Strategic Vision",
        description: "Data-driven brand strategies that align with business objectives and connect emotionally with audiences."
      },
      {
        icon: "🎭",
        title: "Emotional Connection",
        description: "Creating brands that evoke the right feelings and build lasting relationships with customers."
      },
      {
        icon: "🧠",
        title: "Differentiation Focus",
        description: "Identifying and amplifying your unique value proposition to stand out in competitive markets."
      },
      {
        icon: "🌎",
        title: "Global Perspective",
        description: "Creating culturally sensitive brands that resonate across diverse markets and audiences."
      },
      {
        icon: "🔄",
        title: "Consistency Across Touchpoints",
        description: "Ensuring your brand maintains coherence and impact across all customer interactions."
      }
    ],
    potentials: [
      {
        title: "Recognition",
        description: "Instantly identifiable brand elements"
      },
      {
        title: "Memorability",
        description: "Brands that stick in customers' minds"
      },
      {
        title: "Versatility",
        description: "Adaptable across all mediums"
      },
      {
        title: "Longevity",
        description: "Timeless designs that evolve gracefully"
      }
    ],
    faqs: [
      {
        question: "How long does a complete branding project typically take?",
        answer: "A comprehensive branding project usually takes 2-4 months from discovery to final deliverables. This timeline ensures thorough research, strategic development, creative exploration, and proper implementation planning. For rebrands or refreshes of existing brands, the timeline might be shorter."
      },
      {
        question: "What deliverables are included in a typical branding project?",
        answer: "Our standard branding packages include brand strategy documentation, logo design with variations, color palette, typography selection, brand guidelines manual, key marketing collateral templates, and digital asset files in multiple formats. We can customize deliverables based on your specific needs."
      },
      {
        question: "How do you measure the success of a branding project?",
        answer: "We establish success metrics at the beginning of each project, which may include brand awareness, customer perception shifts, engagement metrics, and business impact indicators. We offer post-launch evaluation to measure these outcomes and provide recommendations for ongoing brand building."
      },
      {
        question: "Do you handle trademark registration for new brands?",
        answer: "While we don't provide legal services directly, we work closely with intellectual property attorneys and can make recommendations. We conduct preliminary availability checks during the naming process and design brands with trademark protection in mind."
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing strategies that increase visibility, drive qualified traffic, and convert visitors into loyal customers. We help you get found, get noticed, and get results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    services: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Management",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Analytics & Performance Reporting"
    ],
    approach: [
      "Comprehensive Digital Audit",
      "Competitive Landscape Analysis",
      "Target Audience Definition",
      "Channel Strategy Development",
      "Campaign Creation & Optimization",
      "Continuous Performance Tracking",
      "Iterative Improvement Process"
    ],
    specialties: [
      {
        icon: "📊",
        title: "Data-Driven Strategy",
        description: "We make decisions based on analytics, not assumptions, to maximize your marketing ROI."
      },
      {
        icon: "🎯",
        title: "Audience-Focused Campaigns",
        description: "Precisely targeted marketing that reaches the right people with the right message."
      },
      {
        icon: "🔍",
        title: "SEO Excellence",
        description: "Technical expertise and content strategies that improve organic visibility and rankings."
      },
      {
        icon: "💰",
        title: "Conversion Optimization",
        description: "Turning traffic into leads and sales through optimized user experiences."
      },
      {
        icon: "📈",
        title: "Transparent Reporting",
        description: "Clear, actionable insights that show the real impact of your marketing investment."
      }
    ],
    potentials: [
      {
        title: "Brand Visibility",
        description: "Increased awareness across platforms"
      },
      {
        title: "Qualified Traffic",
        description: "Visitors with high conversion potential"
      },
      {
        title: "Customer Engagement",
        description: "Meaningful interactions with your audience"
      },
      {
        title: "Sustainable Growth",
        description: "Long-term strategy, not quick fixes"
      }
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO efforts?",
        answer: "SEO is a long-term strategy. While some improvements can be seen within 1-3 months, significant results typically become evident within 4-6 months. Highly competitive industries may take longer. We provide monthly progress reports tracking improvements in rankings, traffic, and conversions."
      },
      {
        question: "How do you stay current with constantly changing digital marketing trends and algorithms?",
        answer: "Our team undergoes continuous education, participates in industry conferences, and follows authoritative sources. We maintain close relationships with platform representatives and conduct regular testing to validate strategies. Our collaborative approach ensures we share and implement proven techniques quickly across client accounts."
      },
      {
        question: "What platforms do you specialize in for paid advertising?",
        answer: "We have certified experts in Google Ads, Microsoft Advertising, Meta (Facebook/Instagram), LinkedIn, Twitter, TikTok, and programmatic advertising platforms. We recommend channels based on your industry, audience, and objectives rather than taking a one-size-fits-all approach."
      },
      {
        question: "How do you measure ROI for digital marketing campaigns?",
        answer: "We implement comprehensive tracking solutions to measure conversions, revenue, and customer acquisition costs. Our reporting connects marketing activities to business outcomes through multi-touch attribution models. We work with you to establish meaningful KPIs that align with your business goals, not just vanity metrics."
      }
    ]
  },
  "business-analytics": {
    title: "Business Analytics",
    description: "Transform your data into actionable insights that drive intelligent decision-making and business growth. We help you see patterns, predict trends, and discover opportunities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    services: [
      "Data Strategy Development",
      "Business Intelligence Implementation",
      "Custom Dashboard Creation",
      "Predictive Analytics",
      "Customer Behavior Analysis",
      "Performance Measurement Frameworks",
      "Data Visualization & Reporting"
    ],
    approach: [
      "Data Assessment & Requirements Gathering",
      "Data Architecture Planning",
      "ETL Process Development",
      "Model Building & Validation",
      "Visualization & Dashboard Creation",
      "Insights Extraction & Documentation",
      "Knowledge Transfer & Training"
    ],
    specialties: [
      {
        icon: "🔮",
        title: "Predictive Insights",
        description: "Advanced modeling techniques that help forecast trends and anticipate market changes."
      },
      {
        icon: "📊",
        title: "Actionable Dashboards",
        description: "Intuitive visualizations that transform complex data into clear business directives."
      },
      {
        icon: "🧩",
        title: "Data Integration",
        description: "Seamless consolidation of disparate data sources for a complete business view."
      },
      {
        icon: "🔍",
        title: "Deep Analysis",
        description: "Going beyond surface metrics to uncover the story behind your data."
      },
      {
        icon: "💡",
        title: "Decision Support",
        description: "Analytical frameworks that make complex business decisions more confident and effective."
      }
    ],
    potentials: [
      {
        title: "Cost Reduction",
        description: "Identifying inefficiencies and waste"
      },
      {
        title: "Revenue Growth",
        description: "Discovering untapped opportunities"
      },
      {
        title: "Risk Mitigation",
        description: "Predicting and preventing issues"
      },
      {
        title: "Operational Excellence",
        description: "Optimizing business processes"
      }
    ],
    faqs: [
      {
        question: "Do we need to have a data warehouse already set up to work with you?",
        answer: "No, we can help at any stage of your data journey. We can assess your current data infrastructure, recommend appropriate storage solutions, and help implement them. Whether you need a full data warehouse, a more lightweight data mart, or cloud-based analytics solutions, we tailor our approach to your technical environment and business needs."
      },
      {
        question: "What analytics tools and technologies do you work with?",
        answer: "We have expertise across major analytics platforms including Tableau, Power BI, Looker, Qlik, and Google Data Studio for visualization; Python, R, and SQL for analysis; and AWS, Azure, and Google Cloud for data infrastructure. Our technology-agnostic approach means we recommend and implement the tools that best fit your specific requirements and existing systems."
      },
      {
        question: "How do you ensure data privacy and security in analytics projects?",
        answer: "We implement rigorous data governance practices including data anonymization, role-based access controls, encryption of sensitive data, and compliance with regulations like GDPR, CCPA, and HIPAA as applicable. Our team follows secure development practices and can help establish data governance frameworks within your organization."
      },
      {
        question: "Can you help train our team to use and maintain analytics solutions?",
        answer: "Absolutely. Knowledge transfer is a critical part of our process. We provide comprehensive documentation, hands-on training sessions, and ongoing support to ensure your team can effectively use, maintain, and extend the analytics solutions we develop. We can structure different levels of training for technical users, analysts, and business stakeholders."
      }
    ]
  },
  "supply-chain": {
    title: "Supply Chain Optimization",
    description: "Streamline your supply chain operations to reduce costs, improve efficiency, and create resilient processes that adapt to market changes and disruptions.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    services: [
      "Supply Chain Strategy Development",
      "End-to-End Process Optimization",
      "Inventory Management Solutions",
      "Supplier Relationship Management",
      "Logistics Network Design",
      "Procurement Process Optimization",
      "Supply Chain Technology Integration"
    ],
    approach: [
      "Current State Assessment",
      "Gap Analysis & Benchmarking",
      "Future State Design",
      "Implementation Roadmap Development",
      "Process Reengineering",
      "Technology Selection & Integration",
      "Change Management & Training"
    ],
    specialties: [
      {
        icon: "📉",
        title: "Cost Reduction",
        description: "Identifying and eliminating inefficiencies throughout your supply chain."
      },
      {
        icon: "⚡",
        title: "Operational Speed",
        description: "Accelerating processes to reduce lead times and improve responsiveness."
      },
      {
        icon: "🛡️",
        title: "Risk Mitigation",
        description: "Developing resilient supply chains that withstand disruptions."
      },
      {
        icon: "🌐",
        title: "Global Expertise",
        description: "Navigating international logistics, regulations, and market differences."
      },
      {
        icon: "🤖",
        title: "Technology Integration",
        description: "Implementing digital tools that provide visibility and control across your supply chain."
      }
    ],
    potentials: [
      {
        title: "Agility",
        description: "Responding quickly to market changes"
      },
      {
        title: "Visibility",
        description: "End-to-end transparency"
      },
      {
        title: "Sustainability",
        description: "Environmentally responsible practices"
      },
      {
        title: "Scalability",
        description: "Growth-ready supply chain design"
      }
    ],
    faqs: [
      {
        question: "How do you assess our current supply chain performance?",
        answer: "We conduct a comprehensive assessment that includes data analysis, process mapping, stakeholder interviews, and benchmarking against industry standards. We examine key performance indicators across cost, service, quality, and speed dimensions to identify improvement opportunities. This assessment forms the foundation for our recommendations and implementation roadmap."
      },
      {
        question: "What types of technology do you recommend for supply chain management?",
        answer: "Our recommendations are tailored to your specific needs and existing systems. We have expertise in ERP systems, supply chain planning software, warehouse management systems, transportation management systems, supplier portals, and advanced analytics tools. We focus on creating an integrated technology ecosystem rather than disconnected point solutions."
      },
      {
        question: "How do you help with supplier management and sourcing?",
        answer: "We develop structured approaches to supplier segmentation, performance management, relationship development, and risk assessment. Our sourcing methodologies include category strategy development, supplier identification and evaluation, negotiation support, contract development, and ongoing supplier performance management."
      },
      {
        question: "Can you help make our supply chain more sustainable?",
        answer: "Yes, we incorporate sustainability into our supply chain solutions through strategies such as carbon footprint reduction, ethical sourcing practices, packaging optimization, waste reduction, and circular economy approaches. We help companies balance environmental responsibility with economic performance."
      }
    ]
  },
  "consulting": {
    title: "Business & Technical Consulting",
    description: "Strategic guidance and technical expertise to navigate complex challenges, seize opportunities, and transform your organization for sustainable success.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    services: [
      "Digital Transformation Strategy",
      "Technology Roadmap Development",
      "Business Process Optimization",
      "Technology Selection & Evaluation",
      "IT Strategy & Architecture",
      "Change Management",
      "Project Recovery & Rescue"
    ],
    approach: [
      "Situation Analysis & Discovery",
      "Problem Definition & Framing",
      "Solution Options Development",
      "Implementation Planning",
      "Execution Support",
      "Knowledge Transfer",
      "Results Measurement"
    ],
    specialties: [
      {
        icon: "🔄",
        title: "Transformation Expertise",
        description: "Guiding organizations through complex change initiatives with minimal disruption."
      },
      {
        icon: "🧩",
        title: "Problem Solving",
        description: "Structured frameworks for addressing challenging business and technical issues."
      },
      {
        icon: "🌉",
        title: "Business-Technology Alignment",
        description: "Ensuring technology investments directly support strategic business objectives."
      },
      {
        icon: "👥",
        title: "Stakeholder Engagement",
        description: "Building consensus and driving adoption across diverse organizational groups."
      },
      {
        icon: "📈",
        title: "Value Realization",
        description: "Focusing on measurable outcomes and tangible business results."
      }
    ],
    potentials: [
      {
        title: "Strategic Clarity",
        description: "Defined direction and priorities"
      },
      {
        title: "Execution Excellence",
        description: "From strategy to implementation"
      },
      {
        title: "Knowledge Enhancement",
        description: "Upskilling internal capabilities"
      },
      {
        title: "Accelerated Results",
        description: "Faster time to value"
      }
    ],
    faqs: [
      {
        question: "How do you ensure your consulting recommendations are actually implemented?",
        answer: "We differentiate ourselves by focusing on execution, not just recommendation. Our approach includes developing practical implementation plans, providing tools and templates, offering implementation support, and building internal capability through knowledge transfer. We establish clear accountability structures and governance models to track progress and address barriers to implementation."
      },
      {
        question: "What industries do you specialize in for consulting services?",
        answer: "We have deep expertise across multiple sectors including technology, healthcare, financial services, manufacturing, retail, and professional services. Our consultants bring both industry-specific knowledge and cross-industry best practices, allowing us to provide contextually relevant advice while introducing innovative approaches from other sectors."
      },
      {
        question: "How do you measure the success of consulting engagements?",
        answer: "We establish clear success criteria and key performance indicators at the outset of each engagement, aligned with your business objectives. We track progress against these metrics throughout the engagement and conduct formal reviews at key milestones. Our focus is on delivering tangible business outcomes, not just completing activities or deliverables."
      },
      {
        question: "Do you offer fixed-price consulting or time-and-materials?",
        answer: "We offer flexible engagement models including fixed-price projects, time-and-materials, retainer arrangements, and outcome-based pricing where appropriate. We'll recommend the approach that best aligns with the nature of your challenge, risk profile, and internal procurement preferences. For complex engagements, we often use a phased approach with clear deliverables and decision points."
      }
    ]
  },
  "ai-automation": {
    title: "AI and Automation",
    description: "Harness the power of artificial intelligence and automation to enhance productivity, uncover insights, and create intelligent systems that transform your business capabilities.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    services: [
      "AI Strategy & Roadmap Development",
      "Machine Learning Solutions",
      "Natural Language Processing",
      "Process Automation (RPA)",
      "Intelligent Document Processing",
      "Conversational AI & Chatbots",
      "Computer Vision Applications"
    ],
    approach: [
      "Use Case Identification & Prioritization",
      "Data Readiness Assessment",
      "Solution Architecture Design",
      "Model Development & Training",
      "Integration & Deployment",
      "Performance Monitoring",
      "Continuous Improvement"
    ],
    specialties: [
      {
        icon: "🧠",
        title: "Practical AI",
        description: "Solutions focused on real business outcomes, not just technological novelty."
      },
      {
        icon: "📊",
        title: "Data Expertise",
        description: "Advanced capabilities in preparing and leveraging data for AI applications."
      },
      {
        icon: "⚙️",
        title: "Integration Focus",
        description: "Seamlessly connecting AI solutions with your existing systems and workflows."
      },
      {
        icon: "🔍",
        title: "Explainable AI",
        description: "Creating transparent solutions that build trust and understanding."
      },
      {
        icon: "🚀",
        title: "Scalable Approach",
        description: "Starting with high-impact projects that build momentum for broader transformation."
      }
    ],
    potentials: [
      {
        title: "Efficiency",
        description: "Automating repetitive tasks"
      },
      {
        title: "Intelligence",
        description: "Extracting insights from complex data"
      },
      {
        title: "Innovation",
        description: "Enabling new products and services"
      },
      {
        title: "Personalization",
        description: "Tailoring experiences at scale"
      }
    ],
    faqs: [
      {
        question: "We don't have much data. Can AI still be useful for our business?",
        answer: "Yes, AI can still provide value with limited data. We can leverage transfer learning, pre-trained models, and synthetic data generation techniques. Additionally, we can implement solutions that collect and learn from data incrementally over time. We'll help assess your data needs and develop a strategy that works with your current data assets while building toward more advanced capabilities."
      },
      {
        question: "How do you ensure AI solutions are ethical and responsible?",
        answer: "We follow a comprehensive responsible AI framework that includes bias detection and mitigation, fairness assessments, transparency in decision-making, privacy protection, and human oversight. We conduct ethical reviews throughout the development process and help establish governance structures to ensure ongoing responsible use of AI within your organization."
      },
      {
        question: "What kind of ROI can we expect from AI and automation projects?",
        answer: "ROI varies significantly based on the use case, but typical returns include 30-40% cost reduction for automation projects, 15-25% efficiency improvements in business processes, 10-20% revenue increases through enhanced customer experiences, and 20-35% reduction in error rates. We help build business cases with realistic ROI projections for your specific scenarios."
      },
      {
        question: "How much technical expertise do we need to have internally to maintain AI solutions?",
        answer: "We design solutions with your team's capabilities in mind. For organizations with limited technical expertise, we can build managed solutions with intuitive interfaces and provide comprehensive training and support. As your team's capabilities grow, we help transition more control and customization abilities to your internal resources while remaining available for specialized support."
      }
    ]
  }
};

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Get service data based on ID
  const service = serviceData[serviceId as keyof typeof serviceData];
  
  // If no service found
  if (!service) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h2 className="text-2xl font-bold text-primary">Service not found</h2>
        <p className="mt-4">The requested service does not exist.</p>
        <Link to="/services" className="mt-6 inline-block">
          <Button>Back to Services</Button>
        </Link>
      </div>
    );
  }
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-80 w-full overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
        <div className="container-custom mx-auto -mt-40 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl text-white p-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl opacity-90">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Offered Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Services We Offer</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our comprehensive {serviceId.replace('-', ' ')} services are tailored to meet your unique business needs and objectives.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.services.map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: index * 0.1 } }
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Check size={18} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Your Digital Success, Our Obsession</h3>
              <p className="text-gray-700 mb-6">
                We're not just service providers; we're partners who understand that every project is unique. Our solutions are meticulously crafted to transform your vision into a powerful, scalable reality.
              </p>
              
              <h4 className="font-bold text-xl mb-4">Our Approach</h4>
              <ul className="space-y-3">
                {service.approach.map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.1 } }
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Spigle?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise and client-focused approach set us apart in delivering exceptional {serviceId.replace('-', ' ')} solutions.
            </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.specialties.map((specialty, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-bold mb-3">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Elevating Potential Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevating Your Digital Potential</h2>
            <p className="text-xl opacity-90">
              At Spigle, we go beyond standard solutions. We create strategic assets that amplify your brand, engage your audience, and drive measurable business growth.
            </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {service.potentials.map((potential, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{potential.title}</h3>
                <p className="opacity-80">{potential.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* FAQs and Contact Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Interested in our {service.title.toLowerCase()} services? Fill out the form below and one of our specialists will get back to you within 24 hours.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>
                
                <Button className="w-full">
                  Submit Request <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
