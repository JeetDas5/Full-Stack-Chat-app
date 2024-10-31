const { ConversationModel } = require("../models/ConversationModel");

const getConversation = async (currentUserId) => {
  try {
    const currentUserConversation = await ConversationModel.find({
      $or: [{ sender: currentUserId }, { receiver: currentUserId }],
    })
      .sort({ updatedAt: -1 })
      .populate("messages")
      .populate("sender")
      .populate("receiver");

    const conversation = currentUserConversation.map((conv) => {
      const countUnseenMsg = conv.messages.reduce(
        (prev, curr) =>
          prev +
          (curr.seen === false && curr.msgByUserId !== currentUserId ? 1 : 0),
        0
      );
      return {
        _id: conv._id,
        sender: conv.sender,
        receiver: conv.receiver,
        unseenMsg: countUnseenMsg,
        lastMsg: conv.messages[conv.messages.length - 1],
      };
    });

    // socket.emit("conversation", conversation);
    return conversation;
  } catch (error) {
    console.error("Error in sidebar:", error);
    // socket.emit("error", { message: "Failed to load conversations." });
    return "error", { message: "Failed to load conversations." };
  }
};
module.exports = getConversation;
