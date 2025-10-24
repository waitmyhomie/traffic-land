import express from "express";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const token = process.env.TELEGRAM_TOKEN as string;
const chatId = process.env.CHAT_ID as string;
const port = process.env.PORT || 4000;

const bot = new TelegramBot(token, { polling: false });
const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.post("/send", async (req, res) => {
  try {
    const { fullName, telegram, comment } = req.body;

    // если пользователь не ввёл @, добавляем
    const tgHandle = telegram.startsWith("@") ? telegram : `@${telegram}`;

    const message =
      `📩 Новая заявка с сайта\n\n` +
      `👤 Имя: ${fullName}\n` +
      `💬 Telegram: ${tgHandle}\n` +
      `✍️ Комментарий: ${comment}`;

    await bot.sendMessage(chatId, message);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
});

app.listen(port, () => {
  console.log(`Bot server running on http://localhost:${port}`);
});
