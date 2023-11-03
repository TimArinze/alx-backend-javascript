import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const [room1, room2, room3] = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return [room1, room2, room3];
}
