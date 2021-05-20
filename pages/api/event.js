import fs from "fs";

export default function event(req, res) {
  if (req.method === "POST") {
    const existEvent = getEventData();
    const eventData = req.body;

    existEvent.push(eventData);

    saveEventData(existEvent);
    res.status(200).json({
      success: true,
      message: "Input New Event Successfully",
      results: eventData,
    });
  } else if (req.method === "GET") {
    const event = getEventData();
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    // const search = req.query.search || "";
    const offset = (page - 1) * limit;
    const pages = Math.ceil(event.length / limit);
    const eventData = getEventData().slice(offset, offset + limit);
    
    if(event){
      res.status(200).json({
        success: true,
        message: "Get All Event Successfully",
        results: eventData,
        count: event.length - 1,
        pages: pages,
        currentPage: page,
        dataPerPage: limit,
      });
    }else{
      res.status(404).json({
        success: false,
        message: "Get All Event Not Found",
      });
    }
  } else {
    res.status(200).json({ name: "Next.js" });
  }
}

//read the user data from json file
const saveEventData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("db/event.json", stringifyData);
};
//get the user data from json file
const getEventData = () => {
  const jsonData = fs.readFileSync("db/event.json");
  return JSON.parse(jsonData);    
};