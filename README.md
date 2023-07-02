# CodeSage 💻:
![c3](https://github.com/Heisenberg-737/CodeSage/assets/68119292/7ed6dbb8-b147-4128-9645-d41b084a4091)

# Goal
Significant reduction of coding and debugging time for developers, with the help of an  in-built editor and compile, that helps the developer to do the following:

* Understand existing codebases.<br/>
* Debug their code.<br/>
* Optimise the code.<br/>
* Scale the system.<br/>
* Identify potential security vulnerabilities in the code.<br/>
* Judge the quality and complexity of the code.<br/>


# Business Model
Despite the ongoing recession, the software industry is expected to grow by 31% globally in the coming years. This growth is accompanied by a significant number of aspiring developers aiming to secure positions in top tech companies. Here are some key metrics that highlight the scope and magnitude of the software industry:

### Market Size: 
The global software market is projected to reach a value of $1.43 trillion by 2022, with steady growth expected in the coming years.
Employment: The software industry is a significant source of jobs. According to the U.S. Bureau of Labor Statistics, over 1.6 million software developers were employed in the United States alone in 2020, with a projected growth rate of 22% from 2019 to 2029.

### Contribution to GDP: 
The software industry contributes significantly to the economies of many countries. In the United States, software and related services contributed over $1.6 trillion to the GDP in 2020, accounting for around 8% of the total GDP.

### Venture Capital Investment: 
The software industry attracts substantial venture capital investment globally. In 2020, global venture capital funding for software companies amounted to approximately $69 billion, indicating the industry's potential for innovation and growth.

The different segments that CodeSage would target are as follows:


### 1. Big tech firms: 
Codesage can provide significant benefits to big tech firms like FAANG. With large codebases and hugely complex systems, these firms can benefit from features such as code output visibility, error detection, and optimization suggestions. These tools can help teams identify and resolve issues quickly, reducing debugging time and improving overall productivity. Additionally, CodeSage can assist in scaling code by providing insights into performance bottlenecks and offering suggestions for code optimization. The ability to detect vulnerabilities can also help enhance the security of their software systems.
 
### 2. Startups with less manpower for coding: 
Startups often have limited resources and smaller teams, making efficient coding practices crucial for their success. CodeSage can be a valuable asset for startups with limited manpower for coding. By providing code output visibility and error detection, CodeSage will help identify and fix issues promptly, saving time and effort. Moreover, it can suggest optimizations to improve code efficiency and scalability, enabling startups to build robust and scalable software systems with fewer resources.

### 3. Coding Schools:
  With more and more developers trying to ace their interviews by taking up coding courses or enrolling themselves in coding classes, the best of the classes would be those that provide instant feedback to ace their learning. CodeSage can offer real-time code output and error feedback, allowing instructors to provide immediate guidance and support to students. By highlighting errors and suggesting improvements, CodeSage can help students understand coding concepts more effectively and develop good programming practices. Moreover, features like code optimization suggestions can teach students how to write efficient code.


# Problems with the existing solutions
While editors that offer AI assistance to code have brought significant advancements to the development process, they still face certain challenges and limitations. Some problems with existing AI-assisted code editors include:

* Accuracy and Reliability: AI models used in code editors may not always provide accurate suggestions or predictions. The quality of AI assistance heavily relies on the training data and the model's understanding of coding concepts. Inaccurate suggestions can lead to code errors or inefficiencies if blindly followed by developers.
* Limited Context Awareness: AI models in code editors often lack a deep understanding of the overall project or the developer's specific intent. They may struggle to grasp the broader context in which the code is being written


* Lack of Specificity: The answers provided by AI Chatbots are often generic and may not address the specific use case or problem at hand. Tailoring the responses to meet the specific requirements of interview preparation can be a limitation.


* Context Dependency: Each time the user wants to utilize the AI Chatbot for interview preparation or debugging or optimizing, they need to provide the context. This requirement to repeatedly mention the context can be cumbersome and time-consuming.


* Copy-pasting Inefficiency: Coding in a different editor, and coming to a different place to debug it or ask for assistance isn't the most optimal way for a firm. Having a smart editor with in-built compiler that can solve all your needs would be extremely time efficient.


* Potential Distractions: AI Chatbots may divert the user's attention away from the code editor, leading to distractions. The need to switch between different interfaces or platforms can disrupt the focus and flow of the preparation session.


# Our Solution
* CodeSage was developed with the goal of providing developers with a seamless and efficient means of interacting with ChatGPT for real-time code analysis and feedback. The integration of a built-in editor and compiler empowers developers to not only view their code output but also identify any potential errors. Gone are the days of repetitively copying and pasting code into ChatGPT. Instead, users can simply compose a message within the integrated interface, which promptly transmits the query along with the accompanying code to ChatGPT. This streamlined approach ensures that developers receive tailored responses for their specific code inquiries without unnecessary hassle.
* Furthermore, despite the absence of native memory support in the OpenAI API for ChatGPT, we implemented a custom memory capability within CodeSage. This unique feature allows users to engage in a continuous conversation with the chatbot while retaining crucial context pertaining to their code. By preserving this contextual information, developers can maintain a cohesive dialogue with the chatbot, optimizing the effectiveness and relevance of the responses received. Overall, CodeSage aims to enhance the developer experience by facilitating seamless interactions with ChatGPT and providing an efficient platform for code analysis and communication.

# Unique Features
* Integrated Editor and Compiler: The app includes a built-in code editor and compiler, allowing developers to write and execute their code within the application itself.
* Real-time Code Output: Developers can view the output of their code directly in the app, enabling instant feedback and analysis.
* Error Identification: The app highlights any errors or issues in the code, helping developers identify and rectify them quickly.
* Streamlined ChatGPT Integration: Instead of repetitive copy-pasting, developers can communicate with ChatGPT seamlessly by composing messages within the app's interface. The code is automatically sent along with the query, providing tailored responses specific to the code.
* Custom Memory System: Although the OpenAI API for ChatGPT lacks native memory support, the app incorporates its own memory capability. This allows users to engage in continuous conversations with the chatbot while retaining important context about their code.
* Enhanced User Customization: The app offers additional features like a background/font switcher and a light/dark mode, enhancing user customization and usability.
* Code Structure Improvement: Developers can leverage the app to gain insights into optimizing their code structure and identifying potential errors or vulnerabilities.
* Potential Integration with Package Managers: Future plans involve integrating package managers like npm, opening up possibilities for frontend developers to preview HTML or React code within the app.
* Valuable Addition to Developer Toolkit: The app aims to become a valuable asset for developers, providing a convenient and efficient tool for code analysis, feedback, and communication.

# Tech Stack used
CodeSage was built using T3, Next, Next-Auth, React, and Tailwind, and was written using Typescript. We utilized the most modern, robust frameworks and frontend libraries to maximize the user experience, while also minimizing the amount of development time necessary to achieve my vision. We used React and Tailwind for the styling, look, and feel of the website, including all the states to control the quality of life features and buttons. We used NextAuth along with Google and Discord providers (along with their OAuth APIs) to allow the user to sign in to the app. The editor is implemented using the Monaco editor library, which essentially replicates the iconic VSCode editor. To compile the code, we used Node for JS and Skulpt for Python. We accessed ChatGPT using the OpenAI API, using the gpt-3.5-turbo model, which is what OpenAI currently uses for their chatbot.

### Deployed App Link: https://code-sage-navy.vercel.app/

# Challenges we ran into:

* The project's main challenges were getting the Editor and compiler to function properly and creating a memory system for ChatGPT. Initially, we had planned to integrate a template code editor and focus on implementing ChatGPT. However, we soon realized that the packages and libraries we found on npm for the editor and compiler were outdated and unsuitable for this project. Despite searching for alternative combinations, none met the requirements. Consequently, we had to build a do-it-yourself (DIY) code editor from scratch, utilizing various libraries like Monaco for the VSCode aesthetic and Node VM and Skulpt for compiling.
* Dealing with ChatGPT initially proved frustrating due to its limitations, particularly in handling conversations. To overcome this, we devised a novel memory system that incorporated the user's previous messages and the bot's responses. This contextual information was then sent as a new query, referred to as "context," to ChatGPT. Surprisingly, the system worked flawlessly, enabling the bot to understand the context's intention. Overcoming these challenges proved to be both a significant hurdle and a notable accomplishment in the project.

# Accomplishments we are proud of:

* The editor surpassed our expectations and demonstrated impressive capabilities. An interesting incident occurred while working with JavaScript, where we entered the code "alert("hello world")" just for fun. To our surprise, when we executed the code, an alert actually popped up in the centre of our application. This unexpected functionality highlighted that our code editor not only possessed this feature but also had an advantage over other editors, which typically require deploying a complete HTML webpage to observe JavaScript interactions in action.
* Apart from this delightful discovery, we take immense pride in the seamless functionality of the entire application. Despite the considerable time investment and the challenges of troubleshooting, the app operates exceptionally smoothly. Code compilation occurs within split seconds, and ChatGPT delivers responses in mere seconds as well.
* Another aspect that fills us with pride is the inclusion of numerous quality-of-life features. These enhancements include a background/font switcher and a light/dark mode. Although these features may not be directly essential to the app's core purpose, they significantly contribute to user customization and usability, which are vital aspects for code editors.

# What's Next?
CodeSage currently has the capability to generate code output in a console. However, it would be truly remarkable to extend its functionality for front-end developers, allowing them to preview HTML or React code. By enabling developers to paste their website codebase into the app, they could gain insights into enhancing their code structure and uncovering hidden errors or vulnerabilities. This would introduce an entirely new dimension to browser-based code editing. To achieve this, integration with package managers like npm would be necessary. Such an enhancement would significantly augment the app's functionality, with ChatGPT proving invaluable for this purpose.

In conclusion, we envision CodeSage becoming a valuable asset in every developer's toolkit. Thank you for taking the time to read this!

  




