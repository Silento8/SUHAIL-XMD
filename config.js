const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_57_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid3Vac21wNWJadWhiWTNNc0VzblRzRG9oaitVbWpheHVuZ09MMW41Ym1XQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSEtRSXNMSE1SdUN4a21mRDRoOE5SUVwiLFxuICBcInBob25lSWRcIjogXCI3MzEwMWMzNC0yMjQ4LTQwN2MtYWRlNS1lZTg4MTIxMTc4ZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgNDksXG4gICAgICAyMTksXG4gICAgICAyMSxcbiAgICAgIDY1LFxuICAgICAgMjQ4LFxuICAgICAgMTgyLFxuICAgICAgNDIsXG4gICAgICAyMixcbiAgICAgIDE3MCxcbiAgICAgIDI1NCxcbiAgICAgIDIxNixcbiAgICAgIDI0NixcbiAgICAgIDIxNCxcbiAgICAgIDIwMCxcbiAgICAgIDE3OSxcbiAgICAgIDIzMCxcbiAgICAgIDE3NixcbiAgICAgIDE4MCxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxNjMsXG4gICAgICAxNzksXG4gICAgICAxNDYsXG4gICAgICAyMjcsXG4gICAgICA1NixcbiAgICAgIDEzMSxcbiAgICAgIDE2NyxcbiAgICAgIDIwNyxcbiAgICAgIDEzMyxcbiAgICAgIDk0LFxuICAgICAgMTQ0LFxuICAgICAgMTU3LFxuICAgICAgMjQsXG4gICAgICAxNCxcbiAgICAgIDExMyxcbiAgICAgIDIwMSxcbiAgICAgIDIyMyxcbiAgICAgIDE0NyxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNSE5LRjJEUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE4Mzg3ODE4Ojg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTI2ODY1NTcxNzE3MzQ6ODdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkdVby9BRkVMYnIzcmtHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6L3JRejhMTTJrbmRUd0xwQmd3bWpVc01tN043R1R3cC82Y0J1aUZPUlVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlB0cSsyTElHQnRvVkRoQ1p3WS9NWGZFREpDMGx4U2daRU1VNjQ5eFBpTGg2S0QwZEMvdWNFbXpDak1wNWg2VmRQaXE3S1czdm9HZXpUTWVQZC9lZ0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkM5c1pYSVpsV0pDT2hwSVJKdWpKbGJQZUdBbFNLbnRvbXJ0ZVdlZXYxeVdjK3NWZDV4V2NIeVdiak5uWmxzUldSMU1mVDlUalZNT1B2SjJrb213amdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxODM4NzgxODo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzA0MjUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmh3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOaHcuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
