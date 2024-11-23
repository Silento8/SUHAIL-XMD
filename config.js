const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Africa, Nairobi."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "25418387818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  ||"SUHAIL_20_20_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCN3ViZVJqQ01sWi85cmxrWThvc2pSK0ZrRVZpZm1xQkJGOHdzS2xIQ0F3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIRW1ZMkFZVFJRcXpwQjdkMDdxUXJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNhZWNlOGM3LTgzYzYtNGRhYi1hNmZlLWZkNDE0ODU3YTI1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDE0NSxcbiAgICAgIDE3MCxcbiAgICAgIDE4MyxcbiAgICAgIDcsXG4gICAgICAxMjksXG4gICAgICAxODAsXG4gICAgICAyMTAsXG4gICAgICAxNTksXG4gICAgICAyNDQsXG4gICAgICAyMzAsXG4gICAgICAxNDAsXG4gICAgICA2MixcbiAgICAgIDE0NCxcbiAgICAgIDYxLFxuICAgICAgMTAxLFxuICAgICAgMTIwLFxuICAgICAgMjQzLFxuICAgICAgMTE0LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxMzcsXG4gICAgICA4NCxcbiAgICAgIDI0NixcbiAgICAgIDIxNCxcbiAgICAgIDYxLFxuICAgICAgMTYsXG4gICAgICAxNTMsXG4gICAgICAxMDgsXG4gICAgICAxNjYsXG4gICAgICAxNixcbiAgICAgIDExOCxcbiAgICAgIDIxOCxcbiAgICAgIDUzLFxuICAgICAgNTcsXG4gICAgICA2MyxcbiAgICAgIDMyLFxuICAgICAgMjI1LFxuICAgICAgNjMsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFpRWjVFTFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxODM4NzgxODo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUyNjg2NTU3MTcxNzM0OjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05LVW8vQUZFSXJ5aUxvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiei9yUXo4TE0ya25kVHdMcEJnd21qVXNNbTdON0dUd3AvNmNCdWlGT1JVTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0NGE5U0g4Wng0L0pRcWx0clJpd1ZaS0loZTJwbWF6bEVwY1ZmY0NPSExtS3ZzNEV2eGhkTEo2UHV5TGY2aXhFNElTckhiQVU0cG1icVBLWmlxQURBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKUmppWFZkMnlaZjVHWEtOYWpibDhIWGFZMzlUeVBJNzEyTkpFRlBxWjUvekVpb3Z3UERnSisrT2pJTFpZNkkwamo3aWZuekhNNlJNKytkZnJWZ0Rodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTgzODc4MTg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM5MzIyOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#"
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Alex-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
