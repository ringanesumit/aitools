const toolsData = [
  {
    "name": "ChatGPT",
    "category": "Chatbot",
    "icon": "chatgpt.png",
    "link": "https://chat.openai.com",
    "description": "An advanced AI-powered chatbot by OpenAI."
  },
  {
    "name": "DALL-E",
    "category": "Generative AI",
    "icon": "dalaE.png",
    "link": "https://openai.com/dall-e",
    "description": "AI image generation tool."
  },
  {
    "name": "Jasper",
    "category": "Content Creation",
    "icon": "jasper.png",
    "link": "https://www.jasper.ai",
    "description": "AI writing assistant for creating high-quality content."
  },
  {
    "name": "Grammarly",
    "category": "Writing Assistant",
    "icon": "grammarly.png",
    "link": "https://www.grammarly.com",
    "description": "AI-powered tool for grammar and spell checking."
  },
  {
    "name": "Copy.ai",
    "category": "Marketing",
    "icon": "copyai.png",
    "link": "https://www.copy.ai",
    "description": "Generates marketing copy and content using AI."
  },
  {
    "name": "Lumen5",
    "category": "Video Creation",
    "icon": "lumen5.png",
    "link": "https://www.lumen5.com",
    "description": "AI-driven platform for creating engaging videos."
  },
  {
    "name": "Canva",
    "category": "Design",
    "icon": "canva.png",
    "link": "https://www.canva.com",
    "description": "Graphic design tool with AI-powered features."
  },
  {
    "name": "Hugging Face",
    "category": "Machine Learning",
    "icon": "huggingface.png",
    "link": "https://huggingface.co",
    "description": "Platform for sharing and discovering machine learning models."
  },
  {
    "name": "Craiyon",
    "category": "Image Generation",
    "icon": "craiyon.png",
    "link": "https://www.craiyon.com",
    "description": "Free AI image generator based on text prompts."
  },
  {
    "name": "Synthesia",
    "category": "Video Creation",
    "icon": "synthesia.png",
    "link": "https://www.synthesia.io",
    "description": "AI-powered video creation platform."
  },
  {
    "name": "Runway",
    "category": "Video Editing",
    "icon": "runway.png",
    "link": "https://www.runwayml.com",
    "description": "AI tools for video editing and content creation."
  },
  {
    "name": "Rytr",
    "category": "Writing Assistant",
    "icon": "rytr.png",
    "link": "https://www.rytr.me",
    "description": "AI writing assistant for generating content."
  },
  {
    "name": "Sudowrite",
    "category": "Writing Assistant",
    "icon": "sudowrite.png",
    "link": "https://www.sudowrite.com",
    "description": "AI tool for creative writing assistance."
  },
  {
    "name": "Wordtune",
    "category": "Writing Assistant",
    "icon": "wordtune.png",
    "link": "https://www.wordtune.com",
    "description": "AI-powered writing and editing tool."
  },
  {
    "name": "Vista Social",
    "category": "Social Media Management",
    "icon": "vistasocial.png",
    "link": "https://www.vistasocial.com",
    "description": "AI-driven social media management platform."
  },
  {
    "name": "FeedHive",
    "category": "Social Media Management",
    "icon": "feedhive.png",
    "link": "https://www.feedhive.io",
    "description": "AI-powered social media scheduling and analytics."
  },
  {
    "name": "Midjourney",
    "category": "Image Generation",
    "icon": "midjourney.png",
    "link": "https://www.midjourney.com",
    "description": "AI tool for generating images from text prompts."
  },
  {
    "name": "Canva Magic Studio",
    "category": "Design",
    "icon": "canva.png",
    "link": "https://www.canva.com/magic-studio",
    "description": "AI-powered design tools by Canva."
  },
  {
    "name": "Looka",
    "category": "Design",
    "icon": "looka.png",
    "link": "https://www.looka.com",
    "description": "AI-driven logo and brand design platform."
  },
  //Video Creation tools
  {
      "name": "Canva's AI Video Generator",
      "category": "Video Creation",
      "icon": "canva.png",
      "link": "https://www.canva.com/features/ai-video-generator/",
      "description": "Turn text prompts into AI-generated videos with one click."
    },
    {
      "name": "InVideo AI",
      "category": "Video Creation",
      "icon": "invideo.jpeg",
      "link": "https://invideo.io/make/ai-video-generator/",
      "description": "Generate videos with simple text prompts, including scripts, clips, and voiceovers."
    },
    {
      "name": "Animaker",
      "category": "Video Creation",
      "icon": "animaker.jpeg",
      "link": "https://www.animaker.com/",
      "description": "Online AI animation generator and video maker for studio-quality content."
    },
    {
      "name": "Steve.AI",
      "category": "Video Creation",
      "icon": "steve.png",
      "link": "https://www.steve.ai/",
      "description": "Generate various types of videos, including animation and live-action, from text prompts."
    },
     {
      "name": "Dream Machine",
      "category": "Video Creation",
      "icon": "dreammachine.jpeg",
      "link": "https://lumalabs.ai/dream-machine",
      "description": "Text-to-video model that creates videos based on user prompts or images."
    },
    //Machine Learning tools
      {
        "name": "TensorFlow",
        "category": "Machine Learning",
        "icon": "tensorflow.png",
        "link": "https://www.tensorflow.org",
        "description": "An open-source platform developed by Google for building and deploying machine learning models."
      },
      {
        "name": "PyTorch",
        "category": "Machine Learning",
        "icon": "pytorch.png",
        "link": "https://pytorch.org",
        "description": "An open-source machine learning library developed by Facebook's AI Research lab, known for its dynamic computation graph."
      },
      {
        "name": "Microsoft Azure Machine Learning",
        "category": "Machine Learning",
        "icon": "azure_ml.jpeg",
        "link": "https://azure.microsoft.com/en-us/services/machine-learning/",
        "description": "A cloud-based service from Microsoft that offers a suite of tools for building, training, and deploying machine learning models."
      },
      {
        "name": "Amazon SageMaker",
        "category": "Machine Learning",
        "icon": "sagemaker.jpeg",
        "link": "https://aws.amazon.com/sagemaker/",
        "description": "Amazon's fully managed service that enables developers and data scientists to build, train, and deploy machine learning models at scale."
      },
      {
        "name": "Google Cloud AI Platform",
        "category": "Machine Learning",
        "icon": "gcp_ai.jpeg",
        "link": "https://cloud.google.com/products/ai",
        "description": "Google Cloud's suite of machine learning services that allows users to build, train, and deploy models using Google's infrastructure."
      },
      {
        "name": "IBM Watson Studio",
        "category": "Machine Learning",
        "icon": "watson_studio.jpeg",
        "link": "https://www.ibm.com/cloud/watson-studio",
        "description": "IBM's integrated environment for data scientists, application developers, and subject matter experts to collaboratively and easily work with data."
      },
      {
        "name": "H2O.ai",
        "category": "Machine Learning",
        "icon": "h2o_ai.png",
        "link": "https://www.h2o.ai",
        "description": "An open-source platform that offers a suite of machine learning algorithms and tools for building predictive models."
      },
      //image genration tools
      {
          "name": "DALL·E 2",
          "category": "Image Generation",
          "icon": "dalle2.png",
          "link": "https://openai.com/index/dall-e-2/",
          "description": "An AI system by OpenAI that creates realistic images and art from natural language descriptions."
        },
        {
          "name": "Canva's AI Image Generator",
          "category": "Image Generation",
          "icon": "canva.png",
          "link": "https://www.canva.com/ai-image-generator/",
          "description": "Canva's tool that allows users to create AI-generated images from text prompts."
        },
        {
          "name": "Adobe Firefly",
          "category": "Image Generation",
          "icon": "adobe_firefly.png",
          "link": "https://www.adobe.com/products/firefly/features/text-to-image.html",
          "description": "Adobe's AI image generator that creates images from text descriptions."
        },
        {
          "name": "DeepAI Text-to-Image",
          "category": "Image Generation",
          "icon": "deepai.png",
          "link": "https://deepai.org/machine-learning-model/text2img",
          "description": "A free online AI image generator that transforms text prompts into images."        
        },
        //Search Engine tools        
  {
    "name": "Perplexity AI",
    "category": "AI Search Engine",
    "icon": "perplexity.png",
    "link": "https://www.perplexity.ai",
    "description": "An AI-powered search engine that provides concise answers to user queries by summarizing information from multiple sources."
  },
  {
    "name": "Google AI Overviews",
    "category": "AI Search Engine",
    "icon": "google_ai_overviews.jpeg",
    "link": "https://www.google.com",
    "description": "Google's AI-enhanced search feature that combines traditional search with AI-generated summaries, offering up-to-date information."
  },
  {
    "name": "You.com",
    "category": "AI Search Engine",
    "icon": "you_com.png",
    "link": "https://www.you.com",
    "description": "An AI-powered search engine that offers a personalized and interactive search experience, integrating various AI tools."
  },
  {
    "name": "Consensus",
    "category": "AI Search Engine",
    "icon": "consensus.png",
    "link": "https://consensus.app/home/",
    "description": "An AI-powered academic search engine that helps users find relevant and reliable research papers faster."
  },
  {
    "name": "SearchGPT",
    "category": "AI Search Engine",
    "icon": "searchgpt.png",
    "link": "https://openai.com/index/introducing-chatgpt-search",
    "description": "OpenAI's search engine that combines traditional search features with generative pre-trained transformers (GPT) to generate responses, including citations to external websites."
  },
  //Social Media Management tools
  
  {
    "name": "Buffer",
    "category": "Social Media Management",
    "icon": "buffer.png",
    "link": "https://buffer.com",
    "description": "A user-friendly platform that allows scheduling posts, analyzing performance, and managing multiple social media accounts from a single dashboard."
  },
  {
    "name": "Hootsuite",
    "category": "Social Media Management",
    "icon": "hootsuite.png",
    "link": "https://www.hootsuite.com",
    "description": "Offers comprehensive features including content scheduling, analytics, and team collaboration tools, supporting a wide range of social networks."
  },
  {
    "name": "Zoho Social",
    "category": "Social Media Management",
    "icon": "zoho_social.png",
    "link": "https://www.zoho.com/social/",
    "description": "A social media management tool that helps businesses and agencies grow their presence on social media."
  },
  {
    "name": "SocialPilot",
    "category": "Social Media Management",
    "icon": "socialpilot.png",
    "link": "https://www.socialpilot.co/",
    "description": "Helps easily manage social media accounts, assign roles and permissions, and collaborate on content creation and scheduling."
  },
  {
    "name": "Sendible",
    "category": "Social Media Management",
    "icon": "sendible.png",
    "link": "https://www.sendible.com/",
    "description": "An affordable all-in-one social media management app that nails the basics of scheduling, monitoring, and reporting on social media."
  },
  //video editing tools  
  {
    "name": "Adobe Premiere Pro with Firefly AI",
    "category": "Video Editing",
    "icon": "adobe_firefly.png",
    "link": "https://www.adobe.com/products/premiere/ai-video-editing.html",
    "description": "Adobe's professional video editing software now integrates AI capabilities through the Firefly model, offering features like Generative Extend to seamlessly extend footage and smooth audio edits."
  },
  {
    "name": "Canva's AI Video Editor",
    "category": "Video Editing",
    "icon": "canva.png",
    "link": "https://www.canva.com/video-editor/ai/",
    "description": "Canva's AI-powered video editor allows users to create and edit videos quickly, offering a range of templates and design elements."
  },
  {
    "name": "InVideo AI",
    "category": "Video Editing",
    "icon": "invideo.jpeg",
    "link": "https://invideo.io/make/ai-video-editor/",
    "description": "InVideo AI is an online tool that helps create video drafts by simply entering an idea, streamlining the video creation process."
  },
  {
    "name": "Clipchamp AI Video Editor",
    "category": "Video Editing",
    "icon": "clipchamp_ai.jpeg",
    "link": "https://clipchamp.com/en/ai-video-editing-clipchamp/",
    "description": "Clipchamp offers AI-powered tools to enhance videos, including AI voiceovers, auto subtitles, and background noise removal."
  },
  {
    "name": "LightCut AI Video Editor",
    "category": "Video Editing",
    "icon": "lightcut_ai.png",
    "link": "https://apps.apple.com/us/app/lightcut-ai-video-editor/id1575860488",
    "description": "LightCut is an AI-powered video editing app with templates and effects to create stylish videos and vlogs effortlessly."
  },
  //SEO Optimization tools
  {
    "name": "Surfer SEO",
    "category": "SEO Optimization",
    "icon": "surfer_seo.jpeg",
    "link": "https://surferseo.com/",
    "description": "An AI-powered tool that analyzes top-performing pages to help optimize your content for search engines."
  },
  {
    "name": "HubSpot's AI Tools",
    "category": "Marketing Automation",
    "icon": "hubspot_ai.png",
    "link": "https://www.hubspot.com/products/ai",
    "description": "HubSpot offers a range of AI tools to automate and optimize marketing efforts."
  },
  {
    "name": "Mailchimp's Smart Recommendations",
    "category": "Email Marketing",
    "icon": "mailchimp_ai.png",
    "link": "https://mailchimp.com/features/smart-recommendations/",
    "description": "Mailchimp's AI-driven feature that provides personalized product recommendations to subscribers."
  },
  {
    "name": "ChatGPT for Marketing",
    "category": "Customer Support",
    "icon": "chatgpt.png",
    "link": "https://chat.openai.com/",
    "description": "OpenAI's ChatGPT can be utilized to automate customer interactions and provide personalized responses."
  },
  {
    "name": "Crayon",
    "category": "Competitive Intelligence",
    "icon": "crayon.png",
    "link": "https://www.crayon.co/",
    "description": "An AI-powered competitive intelligence platform that monitors competitors' digital activities."
  },
  {
    "name": "Adext AI",
    "category": "Advertising",
    "icon": "adext_ai.png",
    "link": "https://www.adext.ai/",
    "description": "An AI-driven advertising platform that optimizes ad campaigns across multiple channels."
  },
  
  {
    "name": "SEOpital",
    "category": "SEO Optimization",
    "icon": "seopital.png",
    "link": "https://seopital.com",
    "description": "An AI-powered SEO tool designed to assist professionals and agencies in creating content optimized for search rankings. It leverages real-time web data and algorithms to handle semantic optimization, ensuring effective integration of primary and secondary keywords."
  },
  {
    "name": "SEO.AI",
    "category": "SEO Content Generation",
    "icon": "seoai.jpeg",
    "link": "https://seo.ai",
    "description": "An AI-driven platform that identifies SEO gaps, conducts keyword research, and generates optimized content. It integrates with rank tracking to monitor performance, aiming to enhance website traffic and search engine rankings."
  },
  {
    "name": "Frase",
    "category": "Content Optimization",
    "icon": "frase.png",
    "link": "https://www.frase.io/",
    "description": "A tool that empowers content creators to efficiently produce well-researched, SEO-optimized articles. It streamlines the content creation process, from keyword research to content optimization, enhancing productivity and content quality."
  },  
  {
    "name": "Alli AI",
    "category": "Technical SEO Optimization",
    "icon": "alli.png",
    "link": "https://alli.ai",
    "description": "A platform that automates on-page SEO tasks, including optimizing missing titles, image alt text, external link targets, site speed, and content recommendations. It provides a step-by-step guide to enhance website performance."
  },
  {
    "name": "RankIQ",
    "category": "SEO Content Strategy",
    "icon": "rankiq.png",
    "link": "https://www.rankiq.com",
    "description": "An AI-powered tool that analyzes top-performing content to help users create articles that rank higher in search results. It provides keyword suggestions and content optimization strategies."
  },
  {
    "name": "NeuralText",
    "category": "Content Generation",
    "icon": "neuraltext.jpeg",
    "link": "https://neuraltext.com",
    "description": "An AI tool that assists in generating SEO-optimized content by analyzing top-ranking pages and suggesting improvements. It helps in creating content that aligns with SEO best practices."
  },
  {
    "name": "MarketMuse",
    "category": "Content Strategy",
    "icon": "marketmuse.png",
    "link": "https://www.marketmuse.com",
    "description": "An AI-powered content research and optimization platform that helps in creating content strategies based on competitive analysis and keyword research."
  },
  {
    "name": "Pictory",
    "category": "Visual Content Creation",
    "icon": "pictory.png",
    "link": "https://pictory.ai",
    "description": "An AI tool that assists in creating visual content, such as images and videos, optimized for SEO. It helps in enhancing user engagement and improving search rankings."
  }
    ]
export default toolsData;