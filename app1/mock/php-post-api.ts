import type { Request, Response } from 'umi';

export default {
  // 支持自定义函数，API 参考 express@4
  // GET 可忽略 支持值为 Object 和 Array
  'POST /index.php': (req: Request, res: Response) => {
    const { r } = req.query;
    let json;
    switch (r) {
      case 'choose-room-activity/sign-confirm-login':
        json = {
          retCode: '0',
          data: '',
          retMsg: '',
        };
        break;
      case 'choose-room/sign-confirm':
        json = {
          retCode: 0,
          data: {
            activityId: 949,
            activityName: '新的重构电子签章测试',
            card_no_cipher: '1',
            choose_room_user_id: 4425214,
            consultant_mobile: '15022222222',
            consultant_name: '顾问姓名',
            mobile: '15255555555',
            sign_status: 0,
            user_name: '姓名',
          },
          retMsg: '',
        };
        break;
      case 'choose-room/sign-submit':
        json = {
          data: true,
          retCode: '0',
          retMsg: '',
        };
        break;
      case 'choose-room/print-subscription-letter':
        json = {
          data: true,
          retCode: '0',
          retMsg: '',
        };
        break;
      case 'choose-room-activity/send-verify-code':
        json = {
          data: true,
          retCode: '0',
          retMsg: '',
        };
        break;
      case 'choose-room-activity/confirm-login':
        json = {
          data: '',
          retCode: '0',
          retMsg: '2010033',
        };
        break;
      case 'choose-room/collect':
        json = {
          data: {
            isFavoriteFull: false,
            roomFavoriteCount: 1,
            roomFavoriteLimit: '',
          },
          retCode: '0',
          retMsg: '2010033',
        };
        break;
      case 'choose-room/submit-order':
        json = {
          data: {
            status: 3,
            isBeta: 0,
            orderId: 10069,
            is_show_price: true,
            // nextFavorite: null,
            nextFavorite: {
              buildingArea: '200.0000',
              choose_room_id: '54',
              roomFavoriteCount: 1,
              roomFullName: 'B区-1栋-1单元-14-10014',
              roomPrice: '2400000.00',
              status: 0,
            },
          },
          retCode: '0',
          retMsg: '',
        };
        break;
      case 'choose-room/up-down':
        json = {
          retCode: 0,
          data: true,
          retMsg: '',
        };
        break;
      case 'choose-room-activity/logout':
        json = {
          retCode: 0,
          data: '',
          retMsg: '',
        };
        break;
      case 'zxkp/choose-room-user/sign-abandon-protocol':
        json = {
          retCode: '0',
          data: { url: 'url' },
          retMsg: '',
        };
        break;
      case 'choose-room/bargain':
        json = {
          retCode: '0',
          data: 'url',
          retMsg: '',
        };
        break;
      case 'zxkp/choose-room-order/sign-subscription-letter':
        json = {
          retCode: '0',
          data: { url: 'url' },
          retMsg: '',
        };
        break;
      case 'zxkp/choose-room-order/send-mail':
        json = {
          retCode: 0,
          data: '',
          retMsg: '',
        };
        break;
      case 'choose-room-activity/fuli-user-confirm-login':
        json = {
          retCode: 0,
          data: '',
          retMsg: '',
        };
        break;
      case 'choose-room-activity/check-confirm-user':
        json = {
          retCode: '0', // 2702006
          data: true,
          retMsg: '已超过最大尝试次数,请30分钟后再次登录',
        };
        break;
      case 'choose-room-activity/get-flat-image-room':
        json = {
          retCode: '0',
          retMsg: '',
          data: [
            {
              yunkeRoomId: '6731ad67-3b08-e611-ae4a-00155d02062c',
              roomId: '48038',
              chooseRoomStatus: 0,
            },
            {
              yunkeRoomId: '6831ad67-3b08-e611-ae4a-00155d02062c',
              roomId: '48037',
              chooseRoomStatus: 0,
            },
            {
              yunkeRoomId: '6a31ad67-3b08-e611-ae4a-00155d02062c',
              roomId: '48036',
              chooseRoomStatus: 0,
            },
          ],
          global: {
            roomType: 0,
            roomTypeName: '房间',
            mode: 0,
            batchNameNoticeBar: null,
            selectionRoomHeader: {
              isShowUserCount: true,
              userCount: '5',
              timeInfo: {
                betaStartDate: '2021年10月09日19:14:00',
                regularStartDate: '2021年10月22日19:14:00',
                beforeStartBetaTime: 0,
                beforeEndBetaTime: 174065,
                beforeStartRegularTime: 86400,
                beforeEndRegularTime: 604800,
                activityStatus: 1,
              },
            },
            selectionRoomNoticeBar: null,
            liveDetail: { roomId: 0, isShow: false, liveStatus: 0 },
            isPublish: null,
          },
        };
        break;
      case 'zxkp/choose-room-user/personal-auth':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            url: 'url',
          },
        };
        break;
      default:
        json = {
          retCode: 0,
          data: 'post default',
          retMsg: '',
        };
        break;
    }

    res.json(json);
  },
};
