import { AsyncStorage } from 'react-native'
export async function VerifyCodee(verifyCode) {
      let response
    
      try {
        var token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZhNTU4N2QwZDQ1NWEwMDE3OTc0ZjgyIiwiaWF0IjoxNjA0NjcxNjE0LCJleHAiOjE2MDQ2ODE2MTR9.FBS2B17eX_cycgzUqP51hlgPbQIeKjgZXLLoHhajk7A";
        response = await fetch('https://iimca-online-shopping.herokuapp.com/api/user/verify', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
           body: JSON.stringify({
      verifyCode:verifyCode
      }),
        });
        if (response.status == 200) {
          return await response.json();
        } else if (response.status == 400) {
          var errorResponse = await response.json();
          console.log(errorResponse.error);
          throw new Error(errorResponse.error);
        } else if (response.status == 500) {
          var errorResponse = await response.json();
          throw new Error(errorResponse.error);
        }
      } catch (e) {
        throw e;
      }
    }