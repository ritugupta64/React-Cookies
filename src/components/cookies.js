export const setCookie = (cookieName,cookieValue,daysToExpire) => {
          let date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName + '=' + cookieValue + "; expires=" + date.toGMTString();
        }

export const getCookie = (cookieName) =>
        {
          let name = cookieName + "=";
          let allCookieArray = document.cookie.split(';');
          for(var i=0; i<allCookieArray.length; i++)
          {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name)==0)
            return temp.substring(name.length,temp.length);
       	  }
        	return "";
        }        