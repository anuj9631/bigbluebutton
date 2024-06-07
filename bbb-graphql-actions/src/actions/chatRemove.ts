import { RedisMessage } from '../types';

export default function buildRedisMessage(sessionVariables: Record<string, unknown>, input: Record<string, unknown>): RedisMessage {
  const eventName = 'DestroyGroupChatReqMsg';

  const routing = {
    meetingId: sessionVariables['x-hasura-meetingid'] as string,
    userId: sessionVariables['x-hasura-userid'] as string
  };

  const header = { 
    name: eventName,
    meetingId: routing.meetingId,
    userId: routing.userId
  };

  const body = {
    chatId: input.chatId as string,
  };

  // TODO: Akka-apps doesn't handle this message

  return { eventName, routing, header, body };
}
