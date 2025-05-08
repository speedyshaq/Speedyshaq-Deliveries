import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatboxRef = useRef(null);

  const responses = {
    greetings: [
      "Hi there!",
      "Hello! How can I assist you today?",
      "Hey! Need help with food, clothes, or medicine?",
      "Hi! Welcome to our e-store.",
      "Hello! Looking for something tasty or stylish?",
      "Hey! We’re happy to help you shop.",
      "Hi! Are you hungry, shopping, or need medicine?",
      "Welcome! How can I help you today?",
      "Greetings! Food, fashion, or pharmacy?",
      "Hello friend! What are you shopping for?"
    ],
    farewell: [
      "Goodbye!",
      "Take care!",
      "Thanks for visiting!",
      "Hope to see you again!",
      "Happy shopping!",
      "Stay safe!",
      "Come back soon!",
      "Have a great day!",
      "Bye! Let me know if you need anything else.",
      "Catch you later!"
    ],
    food: [
      "We offer fast food, vegan meals, and fresh groceries.",
      "Would you like to see today’s food deals?",
      "Try our new pizza combo at 20% off!",
      "We deliver food in under 30 minutes in most areas.",
      "Craving something spicy or sweet?",
      "You can order groceries, meals, or snacks here.",
      "Check out our top-rated restaurants.",
      "How about a healthy salad today?",
      "Fresh fruits and vegetables delivered to your door.",
      "Don’t miss our burger & fries combo!"
    ],
    clothes: [
      "We have the latest fashion in men's, women's, and kids' clothing.",
      "Check out our summer collection!",
      "Do you need casual or formal wear?",
      "We're offering 15% off all clothing items this week!",
      "Browse shoes, accessories, and more.",
      "Looking for plus-size, athletic, or baby wear?",
      "Trendy hoodies and sweatshirts available!",
      "Check our winter jackets before they sell out.",
      "New arrivals every Friday.",
      "Need a size chart or fitting help?"
    ],
    medicine: [
      "You can order both prescription and OTC medicines here.",
      "Would you like to upload a prescription?",
      "We offer same-day delivery for most medicines.",
      "Health is wealth! Can I help you find a medicine?",
      "We stock vitamins, pain relief, and more.",
      "Licensed pharmacy with professional support.",
      "Looking for allergy or cold remedies?",
      "Find trusted brands like Tylenol, Advil, and more.",
      "Talk to our support if you need dosage help.",
      "Your prescriptions are safe with us."
    ],
    help: [
      "I'm here to help! Ask about food delivery, clothes, or medicine.",
      "Try typing 'order food', 'buy clothes', or 'medicine info'.",
      "Need help placing an order?",
      "You can ask about delivery times or return policies.",
      "Click on the cart to see your current items.",
      "I can help you track an order if needed.",
      "Looking for gift cards or promo codes?",
      "You can chat with human support if you prefer.",
      "Need help with payment methods?",
      "Just type what you’re looking for!"
    ],
    default: [
      "Sorry, I didn’t understand that. Try asking about food, clothes, or medicine.",
      "Can you rephrase that? I’m still learning!",
      "Hmm, I didn’t catch that. Ask me about our services.",
      "Let’s try again—need food, fashion, or pharmacy?",
      "I’m better at shopping than small talk!",
      "Not sure how to help with that, but I can fetch food or clothes!",
      "You can ask about deliveries, orders, or returns.",
      "Maybe I’m having a slow day—ask me about food?",
      "Need help browsing or checking out?",
      "Try a simple question like ‘show me shoes’ or ‘order pizza’."
    ]
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
      return getRandom(responses.greetings);
    } else if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
      return getRandom(responses.farewell);
    } else if (lowerInput.includes('food') || lowerInput.includes('meal') || lowerInput.includes('groceries')) {
      return getRandom(responses.food);
    } else if (
      lowerInput.includes('clothes') ||
      lowerInput.includes('shirt') ||
      lowerInput.includes('dress') ||
      lowerInput.includes('fashion')
    ) {
      return getRandom(responses.clothes);
    } else if (
      lowerInput.includes('medicine') ||
      lowerInput.includes('drug') ||
      lowerInput.includes('prescription') ||
      lowerInput.includes('pill')
    ) {
      return getRandom(responses.medicine);
    } else if (lowerInput.includes('help') || lowerInput.includes('support')) {
      return getRandom(responses.help);
    } else {
      return getRandom(responses.default);
    }
  };

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botMessage = { sender: 'bot', text: getBotResponse(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatbotWrapper}>
        <div style={styles.chatbox} ref={chatboxRef}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                ...styles.message,
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                color: msg.sender === 'user' ? '#007bff' : '#28a745',
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button style={styles.button} onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh', // full viewport height
      backgroundColor: '#f0f0f0',
    },
    chatbotWrapper: {
      width: '100%',
      maxWidth: '400px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    chatbox: {
      height: '300px',
      overflowY: 'auto',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      marginBottom: '10px'
    },
    message: {
      margin: '5px 0',
      maxWidth: '80%',
      wordBreak: 'break-word'
    },
    inputContainer: {
      display: 'flex',
      gap: '5px'
    },
    input: {
      flex: 1,
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer'
    }
  };
  
export default Chatbot;
