from django.views import View
from django.http import HttpResponse
import requests
import json


class WeiXinCallback(View):
    def get(self, request):
        # APPID = "wxb6a308769a8cd4e2"
        APPID = "wx113b93fc029fa1b6"
        # SECRET = "eee3eb3272f2e43d85c6bb45cb59b325"
        SECRET = "a73b9d640d9f838968eeeac0853c5385"

        # 用户的openid
        open_id = ""
        access_token = ""
        refresh_token = ""

        code = request.GET['code']
        state = request.GET['state']
        code_exchange_access_token_url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+APPID + \
                                         "&secret="+SECRET + \
                                         "&code="+code+"&grant_type=authorization_code"

        res = requests.get(url=code_exchange_access_token_url).json()

        return HttpResponse(json.dumps(res))

        # access_token = res["access_token"]
        # refresh_token = res["refresh_token"]
        # open_id = res["openid"]
        #
        # # 通过openid、access_token获取基本信息
        #
        # user_info_url = "https://api.weixin.qq.com/sns/userinfo?" \
        #                 "access_token="+access_token+"&openid="+open_id+"&lang=zh_CN"
        #
        # user_info_json = requests.get(url=user_info_url).json()
        #
        # # 转码
        # user_info_json['nickname'] = user_info_json['nickname'].encode('ISO-8859-1').decode('UTF-8')
        # user_info_json['city'] = user_info_json['city'].encode('ISO-8859-1').decode('UTF-8')
        # user_info_json['province'] = user_info_json['province'].encode('ISO-8859-1').decode('UTF-8')
        # user_info_json['country'] = user_info_json['country'].encode('ISO-8859-1').decode('UTF-8')
        #
        # print(user_info_json)
        # s = '<html><head></head><body>' \
        #     '<div style="width:25vw;height:25vw;border-radius:50%;overflow:hidden;margin:auto;' \
        #     'margin-top:10vw;"><img style="width:100%" src='+user_info_json['headimgurl']+' />' \
        #     '</div><div style="width: 100%;height:15vw;line-height:15vw;text-align:center;font-size:4.3vw' \
        #                                                                                   '">'\
        #     + user_info_json['nickname']+'</div></body></html>'
        # return HttpResponse(s)
