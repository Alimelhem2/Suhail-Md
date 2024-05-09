const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="melhe4mali211@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "96178823162" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_32_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU4LFxuICAgICAgICA1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjExLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUkp5TVdGdVRPUmdYdXN4RnlJbXA0MzJFK3dTZWR0SG11SDdCUVlZWWN3cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWlHYzNielFRSU9Pa3RFUTBVcUl6QVwiLFxuICBcInBob25lSWRcIjogXCJkMDA3Y2Q4Yy0zYzY0LTQ3MjctYTMwMy1hMWJkM2Q0MGI5YmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMzgsXG4gICAgICAzOSxcbiAgICAgIDI1MyxcbiAgICAgIDQzLFxuICAgICAgMjE0LFxuICAgICAgNjMsXG4gICAgICAxMTgsXG4gICAgICAxNTgsXG4gICAgICA2NCxcbiAgICAgIDY1LFxuICAgICAgMTA3LFxuICAgICAgMTkxLFxuICAgICAgMzYsXG4gICAgICAxMTksXG4gICAgICAxNzYsXG4gICAgICA0NixcbiAgICAgIDE5OCxcbiAgICAgIDE2NyxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDE0OCxcbiAgICAgIDg1LFxuICAgICAgMjE3LFxuICAgICAgMjQ0LFxuICAgICAgNDQsXG4gICAgICAyMjQsXG4gICAgICAxMTEsXG4gICAgICAyMjQsXG4gICAgICA0MSxcbiAgICAgIDQsXG4gICAgICA0LFxuICAgICAgMTM0LFxuICAgICAgMTEsXG4gICAgICA3MyxcbiAgICAgIDI0MCxcbiAgICAgIDIyNCxcbiAgICAgIDEyLFxuICAgICAgODMsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWktXUkdKTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTYxNzg4MjMxNjI6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMwNDM4NTAwMzU2MzI2OjI2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFsaSBtZWxoZW1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdXJ5Tk1CRUo3TThyRUdHQlFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZScmp2NHVBV0J5SDhybkVMcWdXWUhvdFVsSzV0UUxUMmx6azJheXZnamM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZCtFaURubEZTSFVtaUJUdHVkbnlTK0gwUDM3bUwvem9oNWJDeTVJSXdRYzZaYUJKL04rU2ZEM1FNM1dlY0N0VFNTVmpmdWNKbTgvUjhUNmhnNkQ1RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVVJXcVU2OUhFOEcrOU9LYkRpNWt5UFFkR0ZyVFBpbVpKQk9vcS90WWdvZnAzWnFvT05UdUlOR3llY3hnalJWNVdLYjk5ajB0clBkSXRLSzFscU5xQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTYxNzg4MjMxNjI6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTI1MDcyMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Forgz" , // ```『 Forgz 』```", //*『Forgzʙ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "forg ",
  botname : process.env.BOT_NAME  || "Forgz bot",
  ownername:process.env.OWNER_NAME|| "melhem",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
