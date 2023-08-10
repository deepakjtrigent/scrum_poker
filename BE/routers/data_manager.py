import json

def load_data(filename):
    try:
        with open(filename, 'r') as file:
            data = file.read()
            if data.strip():
                return json.loads(data)
            else:
                return {}
    except FileNotFoundError:
        return {}
    except json.JSONDecodeError:
        return {}


def save_data(filename, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)
        file.write("\n")

def discard_room_id(room_id):
    global room_timers, rooms_data

    if room_id in room_timers:
        room_timers[room_id].cancel()
        del room_timers[room_id]

    if room_id in rooms_data:
        del rooms_data[room_id]
        save_data("rooms_data.json", rooms_data)

