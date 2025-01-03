import { useState } from 'react';
import Header from "./header";
import Rotation from "./rotation";
import Card from "./card";
import Contact from "./contact";


function App() {
  const [count, setCount] = useState(0);

  const proj=[{id:1,title:'PDF-summarizer',content:'A user-friendly web application that helps users quickly extract the key points and summaries from PDF documents using Gemini API.',img:'./src/assets/pdf_summarizer.png',link:'https://github.com/sahana-athota/pdf-summarizer'},
    {id:2,title:'AI-chatbot',content:'This project was developed with the goal of creating a functional chatting website using the Gemini API. The platform supports real-time communication between user and Gemini, file uploads, and features such as document summarization and question-answering using AI ',img:'./src/assets/chatbot.png',link:'https://github.com/sahana-athota/chatbot-hack'},
    {id:3,title:'Twitter But Better',content:'Twitter But Better is a cutting-edge social media platform that enhances the traditional experience of connecting over shared interests. ',img:'./src/assets/twitter_but_better.png',link:'https://github.com/sahana-athota/twitter-but-better'},
    ]
    return (
    <div>
     <div class='page1 page'>
      <Header c='1' text=''/>
      <Rotation />
    </div>
    <div class='page2 page'>
      <Header c='0' text='Selected Works' />
      {proj.map((pro, index) => {
        return (
          <Card key={index} title={pro.title} cont={pro.content} img={pro.img} link={pro.link}/>
        ); })}
    </div>
    <div class='page3 page'>
      <hr></hr>
      <Header c='0' text='Get in touch!' />
      <Contact />
    </div>
    </div>
  )
}

export default App
