import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import confetti from "canvas-confetti";

const flowers = ["🌸", "🌺", "🌷", "🌹", "🌻", "🌼"];
const hearts = ["❤️", "💖", "💝", "💘", "💕", "💓"];
const greetings = [
  "Chúc bạn ngày Phụ Nữ đầy niềm vui, được yêu thương và luôn rạng rỡ trong từng khoảnh khắc cuộc sống! 🎉 Bạn xứng đáng với những điều tuyệt vời nhất, và hôm nay là ngày để tôn vinh tất cả những điều đó! 🌸",
  "Chúc bạn không chỉ hôm nay mà mỗi ngày đều tràn đầy niềm vui, hạnh phúc, và thành công! Hãy luôn nhớ rằng bạn là một phần quan trọng trong cuộc sống của những người xung quanh. 🌟",
  "Chúc bạn không ngừng vươn lên, vượt qua mọi thử thách và thành công hơn nữa trong công việc cũng như cuộc sống! 🌟 Hãy luôn tự tin và tỏa sáng như bạn vốn dĩ! ✨",
  "Chúc bạn một ngày thật đặc biệt, với những nụ cười và niềm hạnh phúc lan tỏa! 🌸 Mong rằng những điều tốt đẹp nhất sẽ đến với bạn không chỉ hôm nay mà mỗi ngày đều như thế. ☀️",
  "Chúc bạn một ngày tràn đầy yêu thương, may mắn và những khoảnh khắc tuyệt vời bên gia đình và bạn bè! 😄 Hãy tận hưởng mọi điều tốt đẹp và luôn tỏa sáng! ✨",
  "Chúc bạn ngày Phụ Nữ đầy yêu thương, mỗi ngày đều là cơ hội để bạn làm nên những điều phi thường và đáng nhớ. 🌟 Luôn tự tin và yêu thương bản thân mình nhé! 💖",
];

export default function Component() {
  const [showCard, setShowCard] = useState(false);
  const controls = useAnimation();
  const [randomGreeting, setRandomGreeting] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 1000);
    setRandomGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showCard) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
      }));
    }
  }, [showCard, controls]);

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585", "#DB7093"],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-300 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-300 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `twinkle ${Math.random() * 5 + 5}s linear infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Animated flower petals and hearts */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{
            top: -20,
            left: Math.random() * window.innerWidth,
            rotate: 0,
            opacity: 0.7,
          }}
          animate={{
            top: "100vh",
            left: `${Math.random() * 100}%`,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {flowers[Math.floor(Math.random() * flowers.length)]}
        </motion.div>
      ))}

      {/* Animated hearts background */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{
            color: "rgba(255, 182, 193, 0.8)", // Màu hồng nhạt cho trái tim
          }}
          initial={{
            top: -50,
            left: Math.random() * window.innerWidth,
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            top: "100vh",
            left: `${Math.random() * 100}%`,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {hearts[Math.floor(Math.random() * hearts.length)]}
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-12 max-w-lg w-full text-center relative overflow-hidden hover:shadow-pink-400/80 transition-shadow duration-500"
        initial={{ scale: 0, rotate: -5 }}
        animate={{ scale: showCard ? 1 : 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Neon border */}
        <div className="absolute inset-0 border-4 rounded-2xl overflow-hidden border-neon">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-transparent to-purple-300 animate-neon-flow z-10"></div>
        </div>

        <motion.h1
          className="text-5xl font-bold text-pink-600 mb-6 neon-text relative z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          custom={0}
        >
          Chúc Mừng Ngày Phụ Nữ Việt Nam!
        </motion.h1>
        <motion.p
          className="text-gray-800 mb-6 text-lg relative z-20 neon-glow"
          initial={{ opacity: 0, y: -10 }}
          animate={controls}
          custom={1}
        >
          {randomGreeting}
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 mb-6 relative z-20"
          initial={{ opacity: 0 }}
          animate={controls}
          custom={2}
        >
          {flowers.map((flower, index) => (
            <motion.span
              key={index}
              className="text-4xl transition-transform duration-300 hover:scale-125 hover:text-pink-500 relative neon-glow"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {flower}
            </motion.span>
          ))}
        </motion.div>
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg relative z-20 neon-button hover:shadow-pink-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={launchConfetti}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={3}
        >
          Bấm vô đây đi! 🎉✨
        </motion.button>
      </motion.div>
    </div>
  );
}
