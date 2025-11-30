import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const senderMessage = async (req, res) => {
  try {
    const senderId = req.id.trim();
    const receiverId = req.params.id.trim();
    console.log("receiverId", receiverId);
    const { message } = req.body;
    console.log("message", message);

    let gotconversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!gotconversation) {
      gotconversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      gotconversation.message.push(newMessage._id);
      await gotconversation.save();
      return res
        .status(200)
        .json({ message: "message sent successfully", success: true });
    }
    // await Promise.all([gotconversation.save(), newMessage.save()]);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
};

export const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.id.trim();
    const senderId = req.id.trim();
    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    }).populate("message");
    // console.log("conversation", conversation);
    return res
      .status(200)
      .json({
        message: "messages retrieved successfully",
        success: true,
        data: conversation,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
};
