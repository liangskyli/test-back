import type { Request, Response } from 'umi';
import mockjs from 'mockjs';

const getBatchNameNoticeBar = () => {
  return {
    batchNameNoticeBar: {
      isShow: true,
      currentBatchName: `${mockjs.Random.string(0, 30)}`,
    },
  };
};
const getSelectionRoomNoticeBar = () => {
  return {
    selectionRoomNoticeBar: {
      showType: 1,
      currentSequenceNum: 10, // mockjs.Random.integer(1, 100000),
      mySequenceNum: 100,
      leftSeconds: 100,
      sequenceSecond: 100,
      isShowSelectionRoomBeginDialog: false,
      isPassover: false,
    },
  };
};
const getLiveDetailData = () => {
  return {
    liveDetail: {
      roomId: 1, // 房间id
      isShow: true, // 是否展示浮窗
      liveStatus: 1, // 直播状态 1即将开始 2直播中
    },
  };
};
const getDanmakuData = () => {
  return {
    danmaku: {
      isShowDanmaku: false,
      danmakuConfig: [1, 2, 4],
      chooseRoomOrderList1: [],
      chooseRoomOrderList: [
        {
          orderId: 1,
          roomFullNameNoProjName: '1',
          timeText: `${mockjs.Random.integer(1, 59)}秒`,
        },
        {
          orderId: 2,
          roomFullNameNoProjName: '2',
          timeText: `${mockjs.Random.integer(1, 59)}秒`,
        },
        {
          orderId: 3,
          roomFullNameNoProjName: '3',
          timeText: `${mockjs.Random.integer(1, 59)}分钟`,
        },
        {
          orderId: 4,
          roomFullNameNoProjName: '4',
          timeText: `${mockjs.Random.integer(1, 59)}分钟`,
        },
        {
          orderId: 5,
          roomFullNameNoProjName: '5555555555555555555555555555555555555555',
          timeText: `${mockjs.Random.integer(1, 47)}小时`,
        },
        {
          orderId: 6,
          roomFullNameNoProjName: '6',
          timeText: `${mockjs.Random.integer(1, 59)}分钟`,
        },
        {
          orderId: 7,
          roomFullNameNoProjName: '7',
          timeText: `${mockjs.Random.integer(1, 59)}分钟`,
        },
        {
          orderId: 8,
          roomFullNameNoProjName: '8',
          timeText: `${mockjs.Random.integer(1, 59)}分钟`,
        },
      ],
    },
  };
};
const getSelectionRoomHeaderData = () => {
  return {
    selectionRoomHeader: {
      userCount: 10, // 用户数
      isShowUserCount: true, // 是否显示用户数
      timeInfo: {
        betaStartDate: '2019年12月31日20:00:00',
        regularStartDate: '2020年01月19日20:00:00',
        beforeStartBetaTime: 0,
        beforeEndBetaTime: 50000,
        beforeStartRegularTime: 5000,
        beforeEndRegularTime: 5,
        activityStatus: 3,
      },
    },
  };
};

export default {
  // 支持自定义函数，API 参考 express@4
  // GET 可忽略 支持值为 Object 和 Array
  'GET /index.php': (req: Request, res: Response) => {
    const { r } = req.query;
    let json: any;
    switch (r) {
      case 'choose-room-activity/get-sign-package-for-js-sdk':
        json = {
          retCode: 0,
          data: {
            addrSign: '1',
            appId: '1',
            nonceStr: '1',
            signature: '1',
            timestamp: 10,
          },
          retMsg: '',
        };
        break;
      case 'choose-room/sign-confirm':
        json = {
          retCode: 0,
          data: {
            activityId: 949,
            activityName: '新的重构电子签章测试',
            card_no_cipher: '352222555555222222',
            choose_room_user_id: 4425214,
            consultant_mobile: '15022222222',
            consultant_name: '顾问姓名',
            mobile: '15255555555',
            sign_status: 1,
            user_name: '姓名',
          },
          retMsg: '',
        };
        /* json = {
          data: false,
          retCode: '2700008',
          retMsg: '活动暂未开始，敬请期待',
        }; */
        break;
      case 'choose-room-activity/sign-index':
        json = {
          retCode: '0',
          data: {
            activityName: '新的重构电子签章测试',
            signCount: 1,
            totalCount: 6,
          },
          retMsg: '',
        };
        /* json = {
          data: false,
          retCode: '2700008',
          retMsg: '活动暂未开始，敬请期待',
        }; */
        /* json = {
          data: {activityName:'activityName'},
          retCode: '2703038',
          retMsg: '签到岗未登录',
        }; */
        break;
      case 'choose-room-activity/sign-personal-qr-info':
        json = {
          retCode: '0',
          data: {
            activityInfo: {
              activityId: 1031,
              activityName: '2020092116005开盘公众号支付测试活动',
              beforeEndRegularTime: 3254,
              beforeStartRegularTime: 10,
              endDate: '2020-09-21 17:00:00',
              startDate: '2020-09-21 15:00:00',
            },
            signQr: 'https://test-ztcpic.myscrm.cn/RX460ywoPfp9u5CVYFSw1ek-Co2LDcGp.png',
          },
          retMsg: '',
        };
        break;
      case 'choose-room-activity/is-signed':
        json = {
          data: false,
          retCode: '0',
          retMsg: '',
        };
        break;
      case 'choose-room/get-print-info':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            printOrderInfo: {
              userName: '王远征',
              mobile: '18813975696',
              idCardNo: '441421199404083613',
              printStatus: 1,
              printingTime: '2020-09-22 11:44:41',
              roomFullNameNoProjectName: 'B区-B栋-1-1-B1111',
              chosenNo: '000138',
              orderNo: '20200917000984234860',
              orderDate: '2020-09-17 15:14:04',
              consultantName: 'sk收款人',
              consultantMobile: '13418988888',
            },
            printerList: [
              {
                printClientId: 601,
                printerFullName: '20抓抓兵专用打印机-Canon Inkjet MP530 FAX',
                printerName: 'Canon Inkjet MP530 FAX',
              },
              {
                printClientId: 601,
                printerFullName: '20抓抓兵专用打印机-Microsoft XPS Document Writer',
                printerName: 'Microsoft XPS Document Writer',
              },
              {
                printClientId: 601,
                printerFullName: '20抓抓兵专用打印机-\\\\10.5.1.177\\9F-A打印机',
                printerName: '\\\\10.5.1.177\\9F-A打印机',
              },
              {
                printClientId: 601,
                printerFullName: '20抓抓兵专用打印机-导出为金山PDF',
                printerName: '导出为金山PDF',
              },
              {
                printClientId: 601,
                printerFullName: '20抓抓兵专用打印机-发送至 OneNote 2013',
                printerName: '发送至 OneNote 2013',
              },
              { printClientId: 650, printerFullName: '大翔专用打印机-Fax', printerName: 'Fax' },
              {
                printClientId: 650,
                printerFullName: '大翔专用打印机-HP Universal Printing PCL 6',
                printerName: 'HP Universal Printing PCL 6',
              },
              {
                printClientId: 650,
                printerFullName: '大翔专用打印机-KONICA MINOLTA C364SeriesPCL',
                printerName: 'KONICA MINOLTA C364SeriesPCL',
              },
              {
                printClientId: 650,
                printerFullName: '大翔专用打印机-Microsoft Print to PDF',
                printerName: 'Microsoft Print to PDF',
              },
              {
                printClientId: 650,
                printerFullName: '大翔专用打印机-Microsoft XPS Document Writer',
                printerName: 'Microsoft XPS Document Writer',
              },
              {
                printClientId: 650,
                printerFullName: '大翔专用打印机-OneNote for Windows 10',
                printerName: 'OneNote for Windows 10',
              },
              {
                printClientId: 650,
                printerFullName: '大翔专用打印机-导出为WPS PDF',
                printerName: '导出为WPS PDF',
              },
            ],
          },
        };
        break;
      case 'choose-room-activity/login':
        json = {
          data: {
            customerLogoUrl: 'https://test-ztcpic.myscrm.cn/-Jn5Cigkbkd8ATZZhn2v5XmHvgbMl2Xe.png',
            activityLogo: 'https://test-ztcpic.myscrm.cn/-Jn5Cigkbkd8ATZZhn2v5XmHvgbMl2Xe.png',
            activityName: '新的重构电子签章测试',
            chooseRoomActivityId: 949,
            isEnableElectronicSign: 1,
            isEnableSmsVerify: 0,
            isShowAutoBargain: 1,
            protocolContent:
              '<p>新的重构电子签章测试新的重构电子签章测试新的重构电子签章测试新的重构电子签章测试新的重构电子签章测试</p>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd</div>' +
              '<div>ddd1</div>',
            protocolTitle: '',
          },
          retCode: 0,
          retMsg: '',
        };
        break;
      case 'zxkp/choose-room-user/get-user-auth-info':
        json = {
          data: {
            authUrl: '',
            isForceAuthBargain: 0,
          },
          retCode: 0,
          retMsg: '',
        };
        break;
      case 'choose-room-activity/activity':
        json = {
          data: {
            activityId: 949,
            activityName: `新的重构电子签章测试${mockjs.Random.string(3)}`,
            activityStatus: 3,
            contactPhone: '1343',
            isShowFlatImage: 1,
            description:
              '*活动细则：\n*活动细则：\n*活动细则：\n*活动细则：\n*活动细则：\n*活动细则：\n*活动细则：',
            endDate: '2021-01-19 20:00:00',
            endDateBeta: '2020-01-18 20:00:00',
            imageUrl:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
            notice:
              '*活动须知：\n*活动须知：\n*活动须知：\n*活动须知：\n*活动须知：\n*活动须知：\n*活动须知：',
            picCount: 0,
            picUrl:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
            prompt:
              '*温馨提示：\n*温馨提示：\n*温馨提示：\n*温馨提示：\n*温馨提示：\n*温馨提示：\n*温馨提示：',
            startDate: '2020-01-19 20:00:00',
            startDateBeta: '2019-12-31 20:00:00',
            batchName: '批次名批次名批次名批次名批次名批次名批次', // 批次名
            // 当前活动被上期活动关联 && 当前客户证件号在上期活动认筹名单中存在,才有数据 否则给 null
            prevActivity: {
              activityId: 1,
              activityName: '上个活动',
              activityStatus: 3,
              startDateBeta: '2019-12-31 20:00:00',
              startDate: '2020-01-19 20:00:00',
              // 可参与活动选房类型 1选房成功后，2支付成功后，3签署成功后
              salesNode: 1,
              // 前置任务是否完成
              preIsFinish: false,
            },
            // 当前活动关联了下期活动 && 当前客户证件号在下期活动认筹名单中存在,才有数据 否则给 null
            nextActivity: {
              activityId: 1,
              activityName: '云客公馆车位盛大开盘云客公馆车位盛大开盘',
              activityStatus: 3,
              startDateBeta: '2019-12-31 20:00:00',
              startDate: '2020-01-19 20:00:00',
              // 可参与活动选房类型 1选房成功后，2支付成功后，3签署成功后
              salesNode: 2,
              // 前置任务是否完成
              preIsFinish: false,
            },
            // 协议数据 null 不显示协议
            protocolData: null,
            protocolData1: {
              mobile: '15000001000',
              idCardNo: 'idCardNo',
              isEnableElectronicSign: 1,
              isShowAutoBargain: 1,
              protocolContent:
                '<p>新的重构电子签章测试新的重构电子签章测试新的重构电子签章测试新的重构电子签章测试新的重构电子签章测试</p>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd</div>' +
                '<div>ddd1</div>',
              protocolTitle: '',
            },
          },
          retCode: 0,
          retMsg: '',
        };
        break;
      case 'choose-room-activity/room-list':
        json = {
          data: {
            activityInfo: {
              activityName: '新的重构电子签章测试',
              activityStatus: 3,
              buildingName: '福星惠誉国际城',
              chooseRoomActivityId: 949,
              isShowSoldRoom: 1,
              isShowUserCount: 1,
              userCount: 6,
            },
            blockUnitList: [
              {
                areaFullName: '',
                block: '02栋',
                blockFullName: '02栋',
                houseTypeIds: ['0', '0', '1'],
                houseTypeIdsInUnit: [
                  { unit: '01', unitNo: 1, houseTypeIds: ['0'] },
                  { unit: '02', unitNo: 2, houseTypeIds: ['0'] },
                  { unit: '03', unitNo: 3, houseTypeIds: ['1'] },
                  { unit: '04', unitNo: 3, houseTypeIds: ['1'] },
                  { unit: '05', unitNo: 3, houseTypeIds: ['1'] },
                  { unit: '06', unitNo: 3, houseTypeIds: ['1'] },
                  { unit: '07', unitNo: 3, houseTypeIds: ['1'] },
                ],
                units: ['01', '02', '03', '04', '05', '06', '07'],
              },
              {
                areaFullName: '',
                block: '03栋',
                blockFullName: '03栋',
                houseTypeIds: ['0', '0', '1'],
                houseTypeIdsInUnit: [
                  { unit: '301', unitNo: 31, houseTypeIds: ['0'] },
                  { unit: '302', unitNo: 32, houseTypeIds: ['0'] },
                  { unit: '303', unitNo: 33, houseTypeIds: ['1'] },
                ],
                units: ['301', '302', '303'],
              },
              {
                areaFullName: '',
                block: '04栋',
                blockFullName: '04栋',
                houseTypeIds: ['0', '0', '1'],
                houseTypeIdsInUnit: [
                  { unit: '401', unitNo: 41, houseTypeIds: ['0'] },
                  { unit: '402', unitNo: 42, houseTypeIds: ['0'] },
                  { unit: '403', unitNo: 43, houseTypeIds: ['1'] },
                ],
                units: ['401', '402', '403'],
              },
              {
                areaFullName: '',
                block: '05栋',
                blockFullName: '05栋',
                houseTypeIds: ['0', '0', '1'],
                houseTypeIdsInUnit: [
                  { unit: '501', unitNo: 51, houseTypeIds: ['0'] },
                  { unit: '502', unitNo: 52, houseTypeIds: ['0'] },
                  { unit: '503', unitNo: 53, houseTypeIds: ['1'] },
                ],
                units: ['501', '502', '503'],
              },
              {
                areaFullName: '',
                block: '06栋',
                blockFullName: '06栋',
                houseTypeIds: ['0', '0', '1'],
                houseTypeIdsInUnit: [
                  { unit: '601', unitNo: 61, houseTypeIds: ['0'] },
                  { unit: '602', unitNo: 62, houseTypeIds: ['0'] },
                  { unit: '603', unitNo: 63, houseTypeIds: ['1'] },
                ],
                units: ['601', '602', '603'],
              },
              {
                areaFullName: '',
                block: '07栋',
                blockFullName: '07栋',
                houseTypeIds: ['0', '0', '1'],
                houseTypeIdsInUnit: [
                  { unit: '701', unitNo: 71, houseTypeIds: ['0'] },
                  { unit: '702', unitNo: 72, houseTypeIds: ['0'] },
                  { unit: '703', unitNo: 73, houseTypeIds: ['1'] },
                ],
                units: ['701', '702', '703'],
              },
              {
                areaFullName: '',
                block: '08栋',
                blockFullName: '08栋',
                houseTypeIds: ['0', '0', '1'],
                houseTypeIdsInUnit: [
                  { unit: '801', unitNo: 81, houseTypeIds: ['0'] },
                  { unit: '802', unitNo: 82, houseTypeIds: ['0'] },
                  { unit: '803', unitNo: 83, houseTypeIds: ['1'] },
                ],
                units: ['801', '802', '803'],
              },
            ],
            houseTypeList: [
              {
                houseTypeCode: 'houseTypeCode1',
                buildingArea: '',
                houseTypeId: '1',
                name: 'name1',
              },
              {
                houseTypeCode: 'houseTypeCode2',
                buildingArea: 'buildingArea2',
                houseTypeId: '2',
                name: 'name2',
              },
            ],
            header: {
              userCount: 10, // 用户数
              isShowUserCount: true, // 是否显示用户数
              timeInfo: {
                activityStatus: 3,
                beforeEndBetaTime: 0,
                beforeEndRegularTime: 500,
                beforeStartBetaTime: 0,
                beforeStartRegularTime: 0,
                betaStartDate: '2019年12月31日20:00:00',
                regularStartDate: '2020年01月19日20:00:00',
              },
            },
          },
          retCode: 0,
          retMsg: '',
        };
        break;
      case 'choose-room-activity/ajax-room-list':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            roomList: [
              {
                floor: '10',
                rooms: [
                  {
                    floor: '10',
                    room_id: '69539',
                    choose_room_id: '51868',
                    roomName: '1001',
                    orderBy: '0',
                    status: 1,
                  },
                  {
                    floor: '10',
                    room_id: '69540',
                    choose_room_id: '51869',
                    roomName: '10021002100210021002',
                    orderBy: '0',
                    status: 1,
                  },
                  {
                    floor: '10',
                    room_id: '695401',
                    choose_room_id: '51869',
                    roomName: '1003',
                    orderBy: '0',
                    status: 1,
                  },
                  {
                    floor: '10',
                    room_id: '695402',
                    choose_room_id: '51869',
                    roomName: '1004',
                    orderBy: '0',
                    status: 1,
                  },
                  {
                    floor: '10',
                    room_id: '695403',
                    choose_room_id: '51869',
                    roomName: '1005',
                    orderBy: '0',
                    status: 1,
                  },
                ],
              },
              {
                floor: '9',
                rooms: [
                  {
                    floor: '9',
                    room_id: '69543',
                    choose_room_id: '51866',
                    roomName: '901',
                    orderBy: '0',
                    status: 1,
                  },
                  {
                    floor: '9',
                    room_id: '69544',
                    choose_room_id: '51867',
                    roomName: '902',
                    orderBy: '0',
                    status: 1,
                  },
                ],
              },
              {
                floor: '8',
                rooms: [
                  {
                    floor: '8',
                    room_id: '69546',
                    choose_room_id: '51864',
                    roomName: '801',
                    orderBy: '0',
                    status: 1,
                  },
                  {
                    floor: '8',
                    room_id: '69549',
                    choose_room_id: '51865',
                    roomName: '802',
                    orderBy: '0',
                    status: 1,
                  },
                ],
              },
              {
                floor: '7',
                rooms: [
                  {
                    floor: '7',
                    room_id: '69551',
                    choose_room_id: '51862',
                    roomName: '701',
                    orderBy: '0',
                    status: 1,
                  },
                  {
                    floor: '7',
                    room_id: '69553',
                    choose_room_id: '51863',
                    roomName: '702',
                    orderBy: '0',
                    status: 0,
                  },
                ],
              },
              {
                floor: '6',
                rooms: [
                  {
                    floor: '6',
                    room_id: '69554',
                    choose_room_id: '51860',
                    roomName: '601',
                    orderBy: '0',
                    status: 0,
                  },
                  {
                    floor: '6',
                    room_id: '69556',
                    choose_room_id: '51861',
                    roomName: '602',
                    orderBy: '0',
                    status: 0,
                  },
                ],
              },
            ],
            IsShowFloorNo: 1,
          },
        };
        break;
      case 'choose-room/room':
        json = {
          // retCode: '2701011',
          retCode: '0',
          retMsg: 'ffff',
          data: {
            header: {
              userCount: 10, // 用户数
              isShowUserCount: true, // 是否显示用户数
              timeInfo: {
                betaStartDate: '2019年12月31日20:00:00',
                regularStartDate: '2020年01月19日20:00:00',
                beforeStartBetaTime: 0,
                beforeEndBetaTime: 50000,
                beforeStartRegularTime: 5,
                beforeEndRegularTime: 5,
                activityStatus: 3,
              },
            },
            building_name: '福星惠誉国际城',
            city_name: '布里斯本市',
            protocol_title: '',
            isShowAutoBargain: 1,
            contact_phone: '1343',
            activityId: 949,
            is_show_usable_area: 1,
            is_show_building_area: 1,
            activityVersion: 94,
            is_show_usable_price: 1,
            is_show_building_price: 1,
            is_show_origin_price: 1,
            is_show_price: true,
            roomName: '707',
            room_price: '6800.00',
            is_show_original_usable_price: 1,
            is_show_original_building_price: 1,
            room_area: '68.0000',
            usable_area: '61.0000',
            origin_price: '68100.00',
            building_avg_price: '100.0000',
            usable_avg_price: '111.4800',
            unit_price: '100.00',
            usable_unit_price: '111.48',
            deposit: '17.00',
            floor: '7',
            roomFullNameNoProjName: `02栋-01-7-702-${mockjs.Random.string(3)}`,
            orientation: '朝南',
            houseTypeName: '户型结构',
            houseTypeCategory: '住宅',
            choose_room_status: 0,
            isShowFavoriteCount: 1,
            is_favorited: true,
            is_favorited_full: false,
            favorited_count: 1,
            description:
              '房源描述房源描述房源描述房源描述房源描述房源描述时代的点点滴滴点点滴滴点点滴滴点点滴滴地对地导弹\n但是生生世世生生世世\n生生世世谁谁谁生生世世',
            pic_url:
              'http://ci-yunketest.oss-cn-shenzhen.aliyuncs.com/weiloushu/201808/2018081012/file_39e8345c-6500-db35-beb7-ddc91a0489b7.jpg',
            is_show_decoration_price: 1,
            decoration_price: 111111,
            houseTypePicCount: 1,
            userMobile: '1',
            userIdCardNo: '1',
            userName: '1',
            houseTypePic: {
              // 户型图片
              VR: [
                {
                  backgroundUrl:
                    'https://res.myscrm.cn/weiloushu/202106/2021061118/file_39fd0cc4-6699-1939-5f63-da324192ea79.jpg', // vr背景图片
                  VRUrl:
                    'https://vr720.myscrm.cn/?orgCode=wdadmin&pid=39f43718-0e1b-71fa-f863-ee747d9702b8&launchImageTime=3&project_id=6284&fullTitle=%E4%B8%87%E8%BE%BE%20%E9%A3%8E%E9%9B%85%E9%A2%82%20%7C%20VR%E5%94%AE%E6%A5%BC%E5%A4%84&module=roaming_1608693598492&singleModule=true&hideOtherContent=true&houseTypeIndex=0', // vr地址
                },
                {
                  VRUrl:
                    'https://vr720.myscrm.cn/?orgCode=wdadmin&pid=39f43718-0e1b-71fa-f863-ee747d9702b8&launchImageTime=3&project_id=6284&fullTitle=%E4%B8%87%E8%BE%BE%20%E9%A3%8E%E9%9B%85%E9%A2%82%20%7C%20VR%E5%94%AE%E6%A5%BC%E5%A4%84&module=roaming_1608693598492&singleModule=true&hideOtherContent=true&houseTypeIndex=0', // vr地址
                },
              ],
              description: [
                // 描述图片
                {
                  picUrl:
                    'http://ci-yunketest.oss-cn-shenzhen.aliyuncs.com/weiloushu/201808/2018081012/file_39e8345c-6500-db35-beb7-ddc91a0489b7.jpg',
                },
                {
                  picUrl:
                    'https://res.myscrm.cn/weiloushu/202106/2021061118/file_39fd0cc4-6699-1939-5f63-da324192ea79.jpg',
                },
                {
                  picUrl: 'https://test-ztcpic.myscrm.cn/w5zWZAKvMydO47Hs-9-m6lJUoPWnkusr.jpg',
                },
              ],
              common: [
                // 户型图片 房源中心配置的图片
                {
                  picUrl:
                    'http://ci-yunketest.oss-cn-shenzhen.aliyuncs.com/weiloushu/201808/2018081012/file_39e8345c-6500-db35-beb7-ddc91a0489b7.jpg',
                },
                {
                  picUrl:
                    'https://res.myscrm.cn/weiloushu/202106/2021061118/file_39fd0cc4-6699-1939-5f63-da324192ea79.jpg',
                },
                {
                  picUrl: 'https://test-ztcpic.myscrm.cn/w5zWZAKvMydO47Hs-9-m6lJUoPWnkusr.jpg',
                },
              ],
            },
          },
        };
        break;
      case 'choose-room/get-random-code':
        json = {
          retCode: 0,
          data: {
            // question: null,
            question: {
              question_content: '国国国国国国国国国国国国国国国国国国国国国国国国国国国国国国',
              options: [
                {
                  question_option_id: '1',
                  question_option_content: '国国国国国国国国国国',
                },
                { question_option_id: '2', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '3', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '4', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '5', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '6', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '7', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '8', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '9', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '10', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '11', question_option_content: '国国国国国国国国国国' },
                { question_option_id: '12', question_option_content: '国国国国国国国国国国12' },
              ],
            },
            randomCode: 'D9zRv1t2w7WIrAqDevcEEQiMfZ7CxFaJ',
          },
          retMsg: '',
        };
        break;
      case 'choose-room-activity/get-protocol':
        json = {
          retCode: 0,
          data: {
            protocol_content: `<p>
              <strong><span style="font-size: 14px;">大发大发</span></strong><span style="text-decoration: underline;"><strong><span style="text-decoration: underline; font-size: 14px;">大发的是发大发大发大发大发大发的是发大发大发大发大发大发的是发大发大发大发大发大发的是发<em>大发大发大发大发大发的是发大发大发大发大发大发的是发大发大发大发大发大发的是发大发大发1</em></span></strong></span>
              </p>`,
            protocol_title: '活动协议标题xxx',
          },
          retMsg: '',
        };
        break;
      case 'choose-room-activity/get-my-favorites':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            favoriteList: [
              {
                orders: 1,
                choose_room_id: '48037',
                roomFullName: '广东省-深圳市-南山区-中科大厦-2-208',
                roomPrice: '0',
                buildingArea: '150.0000',
                status: 0,
                roomFavoriteCount: '1',
              },
              {
                orders: 2,
                choose_room_id: '48023',
                roomFullName: '广东省-深圳市-南山区-中科大厦-6-608',
                roomPrice: '0',
                buildingArea: '150.0000',
                status: 1,
                roomFavoriteCount: '2',
              },
              {
                orders: 3,
                choose_room_id: '48024',
                roomFullName: '广东省-深圳市-南山区-中科大厦-3-309',
                roomPrice: '0',
                buildingArea: '150.0000',
                status: 1,
                roomFavoriteCount: '1',
              },
              {
                orders: 4,
                choose_room_id: '48038',
                roomFullName: '广东省-深圳市-南山区-中科大厦-2-207',
                roomPrice: '0',
                buildingArea: '150.0000',
                status: 0,
                roomFavoriteCount: '1',
              },
              {
                orders: 5,
                choose_room_id: '48036',
                roomFullName: '广东省-深圳市-南山区-中科大厦-2-210',
                roomPrice: '0',
                buildingArea: '150.0000',
                status: 0,
                roomFavoriteCount: '2',
              },
            ],
            isShowFavoriteCount: 1,
            historyFavoriteCount: '1',
            is_show_price: false,
            favorite_limit: 10,
            header: {
              isShowUserCount: true,
              userCount: 5,
              timeInfo: {
                betaStartDate: '2021年10月09日19:14:00',
                regularStartDate: '2021年10月22日19:14:00',
                beforeStartBetaTime: 0,
                beforeEndBetaTime: 174064,
                beforeStartRegularTime: 86400,
                beforeEndRegularTime: 604800,
                activityStatus: 1,
              },
            },
            batchNameNoticeBar: null,
          },
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
                beforeEndBetaTime: 174064,
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
      case 'choose-room-activity/get-my-history-favorites':
        json = {
          retCode: '0',
          retMsg: '',
          data: [
            {
              chooseRoomFavoriteCancelId: 'chooseRoomFavoriteCancelId',
              choose_room_id: 'choose_room_id1',
              roomFullName: 'A区9栋-2单元-24F-2401',
              collectTime: '2020/01/19 20:00:00',
              isOnshelf: '1',
            },
            {
              chooseRoomFavoriteCancelId: 'chooseRoomFavoriteCancelId',
              choose_room_id: 'choose_room_id2',
              roomFullName: '明源云客公馆公馆公馆A区9栋-2单元-24F-2401',
              collectTime: '2020-12-14 17:44:22',
              isOnshelf: '1',
            },
            {
              chooseRoomFavoriteCancelId: 'chooseRoomFavoriteCancelId',
              choose_room_id: 'choose_room_id3',
              roomFullName: 'A区9栋-2单元-24F-2401',
              collectTime: '2020-12-14 17:44:22',
              isOnshelf: '0',
            },
          ],
        };
        break;
      case 'choose-room-activity/delete-history-favorite':
        json = { retCode: '0', retMsg: '', data: '' };
        break;
      case 'choose-room-activity/my-home-page':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            nextActivity: {
              activityId: 1,
              activityName: '云客公馆车位盛大开盘云客公馆车位盛大开盘',
              activityStatus: 3,
              startDateBeta: '2019-12-31 20:00:00',
              startDate: '2020-01-19 20:00:00',
              // 可参与活动选房类型 1选房成功后，2支付成功后，3签署成功后
              salesNode: 2,
              // 前置任务是否完成
              preIsFinish: false,
            },
            giftActivity: {
              isShow: true,
              customBannerUrl: '',
              targetUrl: 'https://baidu.com',
            },
            betaOrderList: [
              {
                activityId: 1,
                orderId: 1,
                orderNo: '20210000101010',
                orderDate: '2021-12-24 12:00',
                orderStatus: 1,
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-7-702',
                roomFullNameNoProjName: '02栋-01-7-702',
                cityName: '布里斯本市',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                buildingName: '福星惠誉国际城',
              },
            ],
            orderList: [
              {
                activityId: 949,
                chooseSuccessNotice: '插上的',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 10069,
                orderNo: '20200918000518632640',
                orderStatus: 1,
                orderDate: '2020-09-18 16:48:30',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '17.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-7-702',
                roomFullNameNoProjName: '02栋-01-7-702',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000016',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: false,
                showTimeToBargain: false,
                isShowElectronicReceiptButton: 0,
                timeToBargain: 0,
                signProvider: 0,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 0,
                isShowTimeToElectronicSign: 0,
                timeToElectronicSign: 0,
                isShowElectronicSignButton: 0,
                isShowPayButton: true,
                payCountdown: 10,
                isElectronicSignButtonDisable: false,
              },
              {
                activityId: 949,
                chooseSuccessNotice: '插上的',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 1,
                orderNo: '20200918000518632640',
                orderStatus: 1,
                orderDate: '2020-09-18 16:48:30',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '17.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-7-702',
                roomFullNameNoProjName: '02栋-01-7-702',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000016',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: true,
                showTimeToBargain: true,
                isShowElectronicReceiptButton: 0,
                timeToBargain: 10,
                signProvider: 0,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 0,
                isShowTimeToElectronicSign: 0,
                timeToElectronicSign: 0,
                isShowElectronicSignButton: 0,
                isShowPayButton: false,
                isElectronicSignButtonDisable: false,
              },
              {
                activityId: 949,
                chooseSuccessNotice: '插上的',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 12,
                orderNo: '20200918000518632640',
                orderStatus: 1,
                orderDate: '2020-09-18 16:48:30',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '17.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-7-702',
                roomFullNameNoProjName: '02栋-01-7-702',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000016',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: true,
                showTimeToBargain: true,
                isShowElectronicReceiptButton: 0,
                timeToBargain: 10,
                signProvider: 0,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 0,
                isShowTimeToElectronicSign: 0,
                timeToElectronicSign: 0,
                isShowElectronicSignButton: 0,
                isShowPayButton: false,
                isElectronicSignButtonDisable: false,
              },
              {
                activityId: 949,
                chooseSuccessNotice:
                  '选择成功，银行保证金转定后将会推送短信通知您签署协议，\n请耐心等待！',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 1007011,
                orderNo: '20200918000518610840',
                orderStatus: 1,
                orderDate: '2020-09-18 17:04:04',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '119.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-6-602',
                roomFullNameNoProjName: '02栋-01-6-602',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000017',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: false,
                showTimeToBargain: false,
                isShowElectronicReceiptButton: 0,
                timeToBargain: 0,
                signProvider: 1,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 0,
                isShowTimeToElectronicSign: 1,
                timeToElectronicSign: 10,
                isShowElectronicSignButton: 0,
                isShowPayButton: false,
                isElectronicSignButtonDisable: true,
              },
              {
                activityId: 949,
                chooseSuccessNotice: '插上的',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 10070,
                orderNo: '20200918000518610840',
                orderStatus: 1,
                orderDate: '2020-09-18 17:04:04',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '119.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-6-602',
                roomFullNameNoProjName: '02栋-01-6-602',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000017',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: false,
                showTimeToBargain: false,
                isShowElectronicReceiptButton: 0,
                timeToBargain: 0,
                signProvider: 1,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 0,
                isShowTimeToElectronicSign: 1,
                timeToElectronicSign: 10,
                isShowElectronicSignButton: 1,
                isShowPayButton: false,
                isElectronicSignButtonDisable: false,
              },
              {
                activityId: 949,
                chooseSuccessNotice: '插上的',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 100701,
                orderNo: '20200918000518610840',
                orderStatus: 1,
                orderDate: '2020-09-18 17:04:04',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '19.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-6-602',
                roomFullNameNoProjName: '02栋-01-6-602',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000017',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: false,
                showTimeToBargain: false,
                isShowElectronicReceiptButton: 0,
                timeToBargain: 0,
                signProvider: 0,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 1,
                isShowTimeToElectronicSign: 1,
                timeToElectronicSign: 0,
                isShowElectronicSignButton: 1,
                isShowPayButton: false,
                isElectronicSignButtonDisable: false,
              },
              {
                activityId: 949,
                chooseSuccessNotice: '插上的',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 100702,
                orderNo: '20200918000518610840',
                orderStatus: 1,
                orderDate: '2020-09-18 17:04:04',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '19.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-6-602',
                roomFullNameNoProjName: '02栋-01-6-602',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000017',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: false,
                showTimeToBargain: false,
                isShowElectronicReceiptButton: 1,
                timeToBargain: 0,
                signProvider: 0,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 1,
                isShowTimeToElectronicSign: 1,
                timeToElectronicSign: 0,
                isShowElectronicSignButton: 0,
                isShowPayButton: false,
                isElectronicSignButtonDisable: false,
              },
              {
                activityId: 949,
                chooseSuccessNotice: '插上的',
                userName: '2',
                mobile: '2',
                idCardNo: '2',
                project_num: 0,
                orderId: 100703,
                orderNo: '20200918000518610840',
                orderStatus: 1,
                orderDate: '2020-09-18 17:04:04',
                price: '6800.00',
                origin_price: '6800.00',
                buildingName: '福星惠誉国际城',
                deposit: '19.00',
                roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-01-6-602',
                roomFullNameNoProjName: '02栋-01-6-602',
                showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
                cityName: '布里斯本市',
                room_area: '68.0000',
                unit_price: 100,
                houseTypeName: '',
                is_show_building_area: 1,
                is_show_building_price: 1,
                is_show_origin_price: 1,
                chosen_no: '000017',
                description: '',
                is_show_decoration_price: 1,
                decoration_price: 0,
                showBargainButton: false,
                showTimeToBargain: false,
                isShowElectronicReceiptButton: 1,
                timeToBargain: 0,
                signProvider: 1,
                signMode: 0,
                erpSignUrl: 'http://www.baidu.com',
                showElectronicSignButtonType: 1,
                isShowTimeToElectronicSign: 1,
                timeToElectronicSign: 0,
                isShowElectronicSignButton: 1,
                isShowPayButton: false,
                isElectronicSignButtonDisable: false,
              },
            ],
            personalInfo: {
              activityId: 949,
              userMobile: '2',
              user_name: '2',
              idCardNo: `2${mockjs.Random.string(3)}`,
              can_choose_count: 99,
              project_num: 0,
              consultant_name: '',
              consultant_mobile: '',
              isShowSignQr: true,
              zxyz_activity_id: '',
              zxyz_user_id: '',
              isShowFadadaPersonalAuthLabel: true,
              personalAuthStatus: 0,
              isShowHome: true,
              notShowHomeReason: 4,
              isEnableSignAfterCountdown: 0,
            },
            activityStatus: 3,
            isFromApp: 0,
            handSignErrorMsg: '',
          },
        };
        break;
      case 'choose-room-activity/get-sign-personal-qr-url':
        json = {
          retCode: '0',
          retMsg: '',
          data: 'https://test-ztcpic.myscrm.cn/kEyNn6g-XzSSfCq5Yro63Vp9SRVbOFUh.png',
        };
        break;
      case 'zxkp/choose-room-user/info':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            personalAuthStatus: 0,
          },
        };
        break;
      case 'choose-room/get-zxyz-order-list':
        json = {
          retCode: '0',
          retMsg: '',
          data: [
            {
              zxyzOrderId: '1',
              zxyzActivityName: 'zxyzActivityName',
              frozenPrice: '1122.55',
              frozenTime: '2020-11-10 11:10:15',
            },
            {
              zxyzOrderId: '2',
              zxyzActivityName: 'zxyzActivityName2',
              frozenPrice: '22.55',
              frozenTime: '2020-11-10 11:10:15',
            },
            {
              zxyzOrderId: '3',
              zxyzActivityName: 'zxyzActivityName2',
              frozenPrice: '22.55',
              frozenTime: '2020-11-10 11:10:15',
            },
            {
              zxyzOrderId: '4',
              zxyzActivityName: 'zxyzActivityName2',
              frozenPrice: '22.55',
              frozenTime: '2020-11-10 11:10:15',
            },
            {
              zxyzOrderId: '5',
              zxyzActivityName: 'zxyzActivityName5',
              frozenPrice: '22.55',
              frozenTime: '2020-11-10 11:10:15',
            },
            {
              zxyzOrderId: '6',
              zxyzActivityName: 'zxyzActivityName6',
              frozenPrice: '22.55',
              frozenTime: '2020-11-10 11:10:15',
            },
            {
              zxyzOrderId: '7',
              zxyzActivityName: 'zxyzActivityName7',
              frozenPrice: '22.55',
              frozenTime: '2020-11-10 11:10:15',
            },
          ],
        };
        break;
      case 'zxkp/choose-room-order/get-pay-url':
        json = {
          retCode: 0,
          data: {
            status: 0,
            payUrl: 'payUrl',
          },
          retMsg: '',
        };
        break;
      case 'zxkp/choose-room-order/view-electronic-document':
        json = {
          retCode: 0,
          data: {
            pdfDownloadUrl:
              'https://test-ztcpic.myscrm.cn/39f322b6-8a34-436b-449b-6f47e80b8407.pdf',
            pdfViewUrl:
              'https://testapi.fadada.com:8443/api//viewdocs.action?app_id=401457&timestamp=20200204220930&v=2.0&msg_digest=Qjk4MDJCQkE2MjIzRkJBNzIyQTQwQzY4RUMzQ0ZENzk1NzhCOEE5MA==&send_app_id=null&transaction_id=88554e3e4fbddaa114430c0074507bd4',
          },
          retMsg: '',
        };
        break;
      case 'choose-room/order-detail':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            activityId: 949,
            chooseSuccessNotice: '插上的\n插上的',
            userName: '1',
            mobile: '1',
            idCardNo: '1',
            project_num: 0,
            orderId: 10068,
            orderNo: '20200917000518804830',
            orderStatus: 1,
            orderDate: '2020-09-17 17:34:42',
            price: '6800.00',
            origin_price: '6800.00',
            buildingName: '福星惠誉国际城',
            deposit: '3.00',
            roomFullName: '陈勇粉丝营销项目-粉丝营销项目-02栋-02-6-603',
            roomFullNameNoProjName: `02栋-02-6-603${mockjs.Random.string(3)}`,
            showProjectName: '陈勇粉丝营销项目-粉丝营销项目',
            cityName: '布里斯本市',
            room_area: '68.0000',
            unit_price: 100,
            houseTypeName: 'houseTypeName',
            is_show_building_area: 1,
            is_show_building_price: 1,
            is_show_origin_price: 1,
            chosen_no: '000015',
            description: 'description点滴滴点点滴滴\n地对地导弹但是生生世世',
            is_show_decoration_price: 1,
            decoration_price: 100,
            print_url:
              'https://test-ztcwx.myscrm.cn/sub-zxkp-h5/print/confirm?activityId=949&orderId=10068&token=vwvmjp1457763919',
            timestamp: 1601008688959,
          },
        };
        break;
      case 'choose-room/success':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            giftActivity: {
              isShow: true,
              customBannerUrl: '',
              targetUrl: 'weixin://dl/business/?t=uHVQ30X0ANs',
            },
            nextActivity: {
              activityId: 1,
              activityName: '云客公馆车位盛大开盘云客公馆车位盛大开盘',
              activityStatus: 3,
              startDateBeta: '2019-12-31 20:00:00',
              startDate: '2020-01-19 20:00:00',
              // 可参与活动选房类型 1选房成功后，2支付成功后，3签署成功后
              salesNode: 1,
              // 前置任务是否完成
              preIsFinish: true,
            },
            regularStartTime: '',
            chooseSuccessNotice:
              '请在规定时间完成转定，并签署认购书，否则订单会被取消！\n请在2018-06-12日到项目现场办理签约手续。',
            chooseRoomActivityId: 949,
            isBeta: '0',
            orderId: '10068',
            roomFullName: '02栋-02-6-603',
            handSignErrorMsg: '',
            showElectronicSignButtonType: 1,
            isShowTimeToElectronicSign: 1,
            timeToElectronicSign: 8,
            isShowElectronicSignButton: 0,
            isShowElectronicReceiptButton: 0,
            isShowOnlyOrder: false,
            signProvider: 0,
            signMode: 0,
            erpSignUrl: 'http://www.baidu.com',
            successType: 1,
            showBargainButton: false,
            showTimeToBargain: false,
            timeToBargain: 10,
            isEnableSignAfterCountdown: 1,
            isElectronicSignButtonDisable: true,
          },
        };
        break;
      case 'zxkp/choose-room-order/wait-pay':
        json = {
          retCode: 0,
          data: {
            chooseRoomActivityId: 886,
            roomFullName: '新版电视墙测试A区-D楼栋多单元多楼层-4-2-DD4424',
            deposit: '233.87', // 定金金额
            payCountdown: 10, // 支付定金倒计时，给秒数
            wxPayStatus: 0, // 1:支付成功，0：其它状态不处理(不是小程序回调时，默认给0)
            nextActivity: {
              activityId: 1,
              activityName: '云客公馆车位盛大开盘云客公馆车位盛大开盘',
              activityStatus: 3,
              startDateBeta: '2019-12-31 20:00:00',
              startDate: '2020-01-19 20:00:00',
              // 可参与活动选房类型 1选房成功后，2支付成功后，3签署成功后
              salesNode: 1,
              // 前置任务是否完成
              preIsFinish: true,
            },
          },
          retMsg: '',
        };
        break;
      case 'zxkp/choose-room-order/yunke-sign-preview':
        json = {
          retCode: 0,
          data: {
            pdfIsGenerated: 1,
            html:
              '\n' +
              '<meta charset="utf-8"/><!DOCTYPE html>\n' +
              '<html>\n' +
              '\t<head>\n' +
              '\t\t<style>\n' +
              '\t\t\t#YKJFQZW {position: absolute;top: -20px;left: 70px;max-width: 150px;}\n' +
              '\t\t\t#YKYFQZW { width: auto;\n' +
              '\t\t\t\theight: 140px;\n' +
              '\t\t\t\tposition: absolute;\n' +
              '\t\t\t\t-webkit-transform: rotate(-90deg);\n' +
              '\t\t\t\ttransform: rotate(-90deg);\n' +
              '\t\t\t\ttop: -160px;\n' +
              '\t\t\t\tleft: 173px;\n' +
              '\t\t\t\ttransform-origin: right bottom;}\n' +
              '\t\t</style>\n' +
              '\t</head>\n' +
              '\t<body>\n' +
              '<p class="MsoNormal" style="margin: 0.95pt 0pt 0.0001pt; text-align: center; font-family: Calibri; font-size: 10.5pt;" align="center"><u><span style="font-family: 黑体; font-size: 18pt;"><span style="font-family: 黑体;">南宁空港恒大养生谷</span></span></u><span style="font-family: 黑体; font-size: 18pt;"><span style="font-family: 黑体;">商品房认购书</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0.95pt 0pt 0.0001pt; text-align: center; font-family: Calibri; font-size: 10.5pt;" align="center">&nbsp;</p>\n' +
              '<p class="MsoNormal" style="margin: 1.1pt 0pt 0.0001pt 5pt; font-family: Calibri; font-size: 10.5pt;"><span style="font-size: 10pt;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">&nbsp; &nbsp; &nbsp;<span style="font-size: 12pt;">甲方（出卖人）</span></span></span></strong><span style="font-size: 12pt;"><span style="font-family: 宋体;">：</span><span style="font-family: 宋体;">广</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">西</span></span><span style="font-family: 宋体;">扶绥恒</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">利</span></span><span style="font-family: 宋体;">健康</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">产</span></span><span style="font-family: 宋体;">业发</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">展</span></span><span style="font-family: 宋体;">有限</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">公</span></span><span style="font-family: 宋体;">司 &nbsp; &nbsp; &nbsp; &nbsp;</span><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">乙方（买受人）：</span></span></strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">张三</span></span></span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">甲乙双方确认本认购书是双方真实意思表示，具备合同法规定的基本要素，是有效并受法律保护的。乙方声明对所认购的物业状况、交易条件、周边环境已有充分的了解。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">乙方自愿依下列条件向甲方认购南宁空港恒大养生谷楼盘</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp; &nbsp; 001栋-一单元-1502 &nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">，该商品房的规划用途为【</span><span style="font-family: 楷体_GB2312;">住宅</span><span style="font-family: 楷体_GB2312;">】。</span></span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">该商品房建筑面积共</span><u><span style="font-family: 楷体_GB2312;">&nbsp; &nbsp; 100&nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">平方米，其中，套内建筑面积</span><u><span style="font-family: 楷体_GB2312;">&nbsp; &nbsp; 90 &nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">平方米。选择</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;/ &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">交付标准，获</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;/ &nbsp;</span></u><span style="font-family: 楷体_GB2312;">优惠后，按建筑面积计算，单价为</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;&nbsp;14888.66 &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">元／</span>m</span><sup><span style="font-family: 楷体_GB2312; vertical-align: super;">2</span></sup><span style="font-family: 楷体_GB2312;">；总金额为人民币</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;壹佰陆拾陆万陆仟陆佰陆拾陆元整 &nbsp;</span></u><span style="font-family: 楷体_GB2312;">（即￥</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1666666 &nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">元）。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">一、乙方同意签署本认购书时，支付人民币</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;<span style="font-family: 楷体_GB2312;">贰</span>&nbsp;</span></u><span style="font-family: 楷体_GB2312;">万元整（￥</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;20,000 &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">元）作为定金（定金在签定《商品房买卖合同》时转入房款），甲方在认购书第三联加盖财务收款专用章作收款凭据。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">二、以上房源价格均以按揭付款</span>95折计算。其他付款方式及折扣：一次性付款93折，一年分期付款98折，两年分期付款无折扣。如选择一次性付款、一年分期付款或者两年分期付款的客户线下认购时需对&ldquo;付款方式&rdquo;进行变更，以上房源价格仅限开盘当天有效，准确面积以签署《商品房买卖合同》为准。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">三、线上选房成功后，乙方必须在本认购书签订之日起于</span>5日内至南宁空港恒大养生谷销售中心完成线下认购书签订（以上房源价格以双方签订的线下认购书为准），且根据线下认购书约定的付款方式支付首期款及签署《商品房买卖合同》，否则所付定金不予退还，且甲方有权另售房源。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">四、乙方需在签署《商品房买卖合同》之前全额交存专项维修资金，并将已缴款凭证在签署《商品房买卖合同》时交予甲方。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">五、乙方支付首期款的同时预缴税费￥</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;/ &nbsp;</span></u><span style="font-family: 楷体_GB2312;">元，如政府有关部门调整税费标准，按调整后的标准执行，多退少补。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">六、如乙方履行完毕本认购书义务但甲方未能为乙方保留该房号的，甲方应双倍返还定金，但不再承担其他责任。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">七、乙方同意签署本认购书后不更名、不增减名、不换房，若乙方不能按照认购书姓名签署《商品房买卖合同》则视为乙方违约，甲方可以单方面终止本认购书，另行销售该房屋，乙方无权要求返还定金。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">八、甲乙双方的联络方式以本认购书所载明的电话、通讯地址为准。双方保证对所提供资料的真实性负责。如甲方按上述电话、通讯地址等联络不到乙方，则视为甲方已履行通知送达义务，乙方应承担由此引起的全部责任。</span></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><strong><u><span style="font-family: 楷体_GB2312;">九、乙方已阅读并理解、同意甲方在销售中心公示的各项文件、证书、重要提示、《前期物业服务协议》《临时管理规约》《商品房买卖合同》《商品房买卖合同补充协议》及各附件样板条款，并同意完全按该样板条款签署上述各合同，不再变更、增加或减少任何条款。</span></u></strong><u></u></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><strong><u><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">十、本项目推广名为</span>&ldquo;南宁空港恒大养生谷&rdquo;，具体小区名称以政府批准为准。</span></u></strong><u></u></span></p>\n' +
              '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">十一、本认购书经双方签字或盖章后有效。</span></span></p>\n' +
              '<p class="MsoBodyText" style="margin-left: 0pt; font-family: 楷体; font-size: 10.5pt; margin-top: 0.6pt; margin-right: 11.3pt; text-indent: 42pt; line-height: 18pt; text-align: justify;"><span style="font-family: 楷体_GB2312; font-size: 10pt;">十二、乙方签署本协议书即代表本人已知悉国家及地方有关房屋限购及限贷政策，对于提供虚假材料及不符合政策条件而进行的房屋交易行为而产生的法律责任，乙方愿意承担全部责任。</span></p>\n' +
              '<table style="height: 18px; width: 100%; border-collapse: collapse;">\n' +
              '<tbody>\n' +
              '<tr style="height: 18px;">\n' +
              '<td style="width: 389px; height: 18px;">\n' +
              '<p style="position: relative;"><span style="font-size: 10pt;"><strong>甲方（签章）：</strong>&nbsp;<span style=\'color: #FFFFFF;\'><img id="YKJFQZW" src="https://test-ztcpic.myscrm.cn/rBe5uJrN-7CLyU4AfAk54oroV1hmNJ_J.png"/></span>&nbsp;<strong><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">广</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">西</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">扶绥恒</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">利</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">健康</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">产</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">业发</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">展</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">有限</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">公</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">司</span></span></strong></span></p>\n' +
              '<p style="text-align: justify;"><strong><span style="font-size: 10pt;">地址：</span><span style="font-size: 10pt;"><span style="font-family: 黑体;">南宁市空港经济区空港大道旁</span></span></strong></p>\n' +
              '<p><strong><span style="font-size: 10pt;">电话：</span></strong><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">400-181-9999</span></p>\n' +
              '<p><strong><span style="font-size: 10pt;">全国24小时客服热线：</span></strong><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">400-</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">889</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">-</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">3333</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">(客服微信公众号：HDLYKHFW)</span></p>\n' +
              '<p><strong><span style="font-size: 10pt;">经办人： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;销售经理： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></strong><span style="font-size: small;"><strong>财务：</strong></span></p>\n' +
              '</td>\n' +
              '<td style="width: 317px; height: 18px;">\n' +
              '<p style="position: relative;"><img id="YKYFQZW" src="data:image/png;base64,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"/>&nbsp;<span style="font-size: 10pt;"><strong>乙方（正楷签章）：</strong></span><span style="text-decoration: underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</span></p>\n' +
              '<p><span style="font-size: 10pt;"><strong>身份证号码/公司册码：</strong><span style="text-decoration: underline;">&nbsp; &nbsp;</span></span></p>\n' +
              '<p><span style="font-size: 10pt;"><strong>通讯地址：</strong><span style="text-decoration: underline;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></span></p>\n' +
              '<p><span style="font-size: 10pt;"><strong>联系电话：</strong><span style="text-decoration: underline;">&nbsp;&nbsp; &nbsp;13088889999 &nbsp; &nbsp;</span></span></p>\n' +
              '<p><span style="font-size: 10pt;"><strong>签署日期：</strong><span style="text-decoration: underline;">&nbsp;&nbsp; 2020年02月02日&nbsp; &nbsp;&nbsp;</span></span></p>\n' +
              '</td>\n' +
              '</tr>\n' +
              '</tbody>\n' +
              '</table>\n' +
              '</body>\n' +
              '</html>',
          },
          retMsg: '',
        };
        break;
      case 'zxkp/choose-room-order/get-yunke-sign-content':
        json = {
          retCode: 0,
          data:
            '\n' +
            '<meta charset="utf-8"/><!DOCTYPE html>\n' +
            '<html>\n' +
            '\t<head>\n' +
            '\t\t<style>\n' +
            '\t\t\t#YKJFQZW {position: absolute;top: -20px;left: 70px;max-width: 150px;}\n' +
            '\t\t\t#YKYFQZW { width: auto;\n' +
            '\t\t\t\theight: 140px;\n' +
            '\t\t\t\tposition: absolute;\n' +
            '\t\t\t\t-webkit-transform: rotate(-90deg);\n' +
            '\t\t\t\ttransform: rotate(-90deg);\n' +
            '\t\t\t\ttop: -160px;\n' +
            '\t\t\t\tleft: 173px;\n' +
            '\t\t\t\ttransform-origin: right bottom;}\n' +
            '\t\t</style>\n' +
            '\t</head>\n' +
            '\t<body>\n' +
            '<p class="MsoNormal" style="margin: 0.95pt 0pt 0.0001pt; text-align: center; font-family: Calibri; font-size: 10.5pt;" align="center"><u><span style="font-family: 黑体; font-size: 18pt;"><span style="font-family: 黑体;">南宁空港恒大养生谷</span></span></u><span style="font-family: 黑体; font-size: 18pt;"><span style="font-family: 黑体;">商品房认购书</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0.95pt 0pt 0.0001pt; text-align: center; font-family: Calibri; font-size: 10.5pt;" align="center">&nbsp;</p>\n' +
            '<p class="MsoNormal" style="margin: 1.1pt 0pt 0.0001pt 5pt; font-family: Calibri; font-size: 10.5pt;"><span style="font-size: 10pt;"><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">&nbsp; &nbsp; &nbsp;<span style="font-size: 12pt;">甲方（出卖人）</span></span></span></strong><span style="font-size: 12pt;"><span style="font-family: 宋体;">：</span><span style="font-family: 宋体;">广</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">西</span></span><span style="font-family: 宋体;">扶绥恒</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">利</span></span><span style="font-family: 宋体;">健康</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">产</span></span><span style="font-family: 宋体;">业发</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">展</span></span><span style="font-family: 宋体;">有限</span><span style="letter-spacing: -0.15pt;"><span style="font-family: 宋体;">公</span></span><span style="font-family: 宋体;">司 &nbsp; &nbsp; &nbsp; &nbsp;</span><strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">乙方（买受人）：</span></span></strong><span style="font-family: 黑体;"><span style="font-family: 黑体;">张三</span></span></span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">甲乙双方确认本认购书是双方真实意思表示，具备合同法规定的基本要素，是有效并受法律保护的。乙方声明对所认购的物业状况、交易条件、周边环境已有充分的了解。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">乙方自愿依下列条件向甲方认购南宁空港恒大养生谷楼盘</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp; &nbsp; 001栋-一单元-1502 &nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">，该商品房的规划用途为【</span><span style="font-family: 楷体_GB2312;">住宅</span><span style="font-family: 楷体_GB2312;">】。</span></span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">该商品房建筑面积共</span><u><span style="font-family: 楷体_GB2312;">&nbsp; &nbsp; 100&nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">平方米，其中，套内建筑面积</span><u><span style="font-family: 楷体_GB2312;">&nbsp; &nbsp; 90 &nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">平方米。选择</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;/ &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">交付标准，获</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;/ &nbsp;</span></u><span style="font-family: 楷体_GB2312;">优惠后，按建筑面积计算，单价为</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;&nbsp;14888.66 &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">元／</span>m</span><sup><span style="font-family: 楷体_GB2312; vertical-align: super;">2</span></sup><span style="font-family: 楷体_GB2312;">；总金额为人民币</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;壹佰陆拾陆万陆仟陆佰陆拾陆元整 &nbsp;</span></u><span style="font-family: 楷体_GB2312;">（即￥</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1666666 &nbsp; &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">元）。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">一、乙方同意签署本认购书时，支付人民币</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;<span style="font-family: 楷体_GB2312;">贰</span>&nbsp;</span></u><span style="font-family: 楷体_GB2312;">万元整（￥</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;20,000 &nbsp;&nbsp;</span></u><span style="font-family: 楷体_GB2312;">元）作为定金（定金在签定《商品房买卖合同》时转入房款），甲方在认购书第三联加盖财务收款专用章作收款凭据。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">二、以上房源价格均以按揭付款</span>95折计算。其他付款方式及折扣：一次性付款93折，一年分期付款98折，两年分期付款无折扣。如选择一次性付款、一年分期付款或者两年分期付款的客户线下认购时需对&ldquo;付款方式&rdquo;进行变更，以上房源价格仅限开盘当天有效，准确面积以签署《商品房买卖合同》为准。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">三、线上选房成功后，乙方必须在本认购书签订之日起于</span>5日内至南宁空港恒大养生谷销售中心完成线下认购书签订（以上房源价格以双方签订的线下认购书为准），且根据线下认购书约定的付款方式支付首期款及签署《商品房买卖合同》，否则所付定金不予退还，且甲方有权另售房源。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">四、乙方需在签署《商品房买卖合同》之前全额交存专项维修资金，并将已缴款凭证在签署《商品房买卖合同》时交予甲方。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">五、乙方支付首期款的同时预缴税费￥</span><u><span style="font-family: 楷体_GB2312;">&nbsp;&nbsp;/ &nbsp;</span></u><span style="font-family: 楷体_GB2312;">元，如政府有关部门调整税费标准，按调整后的标准执行，多退少补。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">六、如乙方履行完毕本认购书义务但甲方未能为乙方保留该房号的，甲方应双倍返还定金，但不再承担其他责任。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">七、乙方同意签署本认购书后不更名、不增减名、不换房，若乙方不能按照认购书姓名签署《商品房买卖合同》则视为乙方违约，甲方可以单方面终止本认购书，另行销售该房屋，乙方无权要求返还定金。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">八、甲乙双方的联络方式以本认购书所载明的电话、通讯地址为准。双方保证对所提供资料的真实性负责。如甲方按上述电话、通讯地址等联络不到乙方，则视为甲方已履行通知送达义务，乙方应承担由此引起的全部责任。</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><strong><u><span style="font-family: 楷体_GB2312;">九、乙方已阅读并理解、同意甲方在销售中心公示的各项文件、证书、重要提示、《前期物业服务协议》《临时管理规约》《商品房买卖合同》《商品房买卖合同补充协议》及各附件样板条款，并同意完全按该样板条款签署上述各合同，不再变更、增加或减少任何条款。</span></u></strong><u></u></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><strong><u><span style="font-family: 楷体_GB2312;"><span style="font-family: 楷体_GB2312;">十、本项目推广名为</span>&ldquo;南宁空港恒大养生谷&rdquo;，具体小区名称以政府批准为准。</span></u></strong><u></u></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0pt 0pt 0.0001pt 21pt; font-family: Calibri; font-size: 10.5pt; text-indent: 21pt; line-height: 18pt; text-align: justify;"><span style="font-size: 10pt;"><span style="font-family: 楷体_GB2312;">十一、本认购书经双方签字或盖章后有效。</span></span></p>\n' +
            '<p class="MsoBodyText" style="margin-left: 0pt; font-family: 楷体; font-size: 10.5pt; margin-top: 0.6pt; margin-right: 11.3pt; text-indent: 42pt; line-height: 18pt; text-align: justify;"><span style="font-family: 楷体_GB2312; font-size: 10pt;">十二、乙方签署本协议书即代表本人已知悉国家及地方有关房屋限购及限贷政策，对于提供虚假材料及不符合政策条件而进行的房屋交易行为而产生的法律责任，乙方愿意承担全部责任。</span></p>\n' +
            '<table style="height: 18px; width: 100%; border-collapse: collapse;">\n' +
            '<tbody>\n' +
            '<tr style="height: 18px;">\n' +
            '<td style="width: 389px; height: 18px;">\n' +
            '<p style="position: relative;"><span style="font-size: 10pt;"><strong>甲方（签章）：</strong>&nbsp;<span style=\'color: #FFFFFF;\'><img id="YKJFQZW" src="https://test-ztcpic.myscrm.cn/rBe5uJrN-7CLyU4AfAk54oroV1hmNJ_J.png"/></span>&nbsp;<strong><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">广</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">西</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">扶绥恒</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">利</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">健康</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">产</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">业发</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">展</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">有限</span></span><span style="font-family: Calibri; text-align: justify; letter-spacing: -0.15pt;"><span style="font-family: 宋体;">公</span></span><span style="font-family: Calibri; text-align: justify;"><span style="font-family: 宋体;">司</span></span></strong></span></p>\n' +
            '<p style="text-align: justify;"><strong><span style="font-size: 10pt;">地址：</span><span style="font-size: 10pt;"><span style="font-family: 黑体;">南宁市空港经济区空港大道旁</span></span></strong></p>\n' +
            '<p><strong><span style="font-size: 10pt;">电话：</span></strong><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">400-181-9999</span></p>\n' +
            '<p><strong><span style="font-size: 10pt;">全国24小时客服热线：</span></strong><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">400-</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">889</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">-</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">3333</span><span style="text-align: justify; font-family: 黑体; font-size: 9pt;">(客服微信公众号：HDLYKHFW)</span></p>\n' +
            '<p><strong><span style="font-size: 10pt;">经办人： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;销售经理： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></strong><span style="font-size: small;"><strong>财务：</strong></span></p>\n' +
            '</td>\n' +
            '<td style="width: 317px; height: 18px;">\n' +
            '<p style="position: relative;"><img id="YKYFQZW" src="data:image/png;base64,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"/>&nbsp;<span style="font-size: 10pt;"><strong>乙方（正楷签章）：</strong></span><span style="text-decoration: underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</span></p>\n' +
            '<p><span style="font-size: 10pt;"><strong>身份证号码/公司册码：</strong><span style="text-decoration: underline;">&nbsp; &nbsp;</span></span></p>\n' +
            '<p><span style="font-size: 10pt;"><strong>通讯地址：</strong><span style="text-decoration: underline;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></span></p>\n' +
            '<p><span style="font-size: 10pt;"><strong>联系电话：</strong><span style="text-decoration: underline;">&nbsp;&nbsp; &nbsp;13088889999 &nbsp; &nbsp;</span></span></p>\n' +
            '<p><span style="font-size: 10pt;"><strong>签署日期：</strong><span style="text-decoration: underline;">&nbsp;&nbsp; 2020年02月02日&nbsp; &nbsp;&nbsp;</span></span></p>\n' +
            '</td>\n' +
            '</tr>\n' +
            '</tbody>\n' +
            '</table>\n' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd</div>' +
            '<div>ddd1</div>' +
            '</body>\n' +
            '</html>',
          retMsg: '',
        };
        break;
      case 'choose-room-activity/pic-list':
        json = {
          retCode: '0',
          retMsg: '',
          data: [
            {
              pic_url: 'https://test-ztcpic.myscrm.cn/PNODEwmjs3Djfro61Bm5XDSy6la2EjB4.jpg',
              name: '的发的的发的的的发的的发的的的发的的发的的的发的的发的的的发的的发的的',
            },
            {
              pic_url: 'https://test-ztcpic.myscrm.cn/w5zWZAKvMydO47Hs-9-m6lJUoPWnkusr.jpg',
              name: '的发的的发的的的发的的',
            },
          ],
        };
        break;
      case 'choose-room/house-type-pic':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            VR: [
              {
                backgroundUrl:
                  'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/02842001927914388-1610613581460-src%3Dhttp___img8.zol.com.cn_bbs_upload_18674_18673802.jpg%26refer%3Dhttp___img8.zol.com.jpg',
                VRUrl:
                  'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/02842001927914388-1610613581460-src%3Dhttp___img8.zol.com.cn_bbs_upload_18674_18673802.jpg%26refer%3Dhttp___img8.zol.com.jpg',
              },
            ],
            description: {
              pics: [
                'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/048655725604357736-1609501023543-2602.jpg',
                'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/09957987165797992-1610613647749-true.jpg',
                'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/022834548014620326-1623826016709-01653f04-823d-4bf5-882a-58567d2377cb.jpg',
              ],
              introductionList: [
                '11111公寓\n(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件',
              ],
            },
            common: {
              name: null,
              building_area: '77',
              introductionList: [
                '公寓\n(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件(推荐尺寸640px*360px，大小不超过100KB，支持jpg、png图片)\n上传未选择任何文件',
              ],
              pics: [
                'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/048655725604357736-1609501023543-2602.jpg',
                'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/09957987165797992-1610613647749-true.jpg',
                'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/022834548014620326-1623826016709-01653f04-823d-4bf5-882a-58567d2377cb.jpg',
              ],
            },
          },
        };
        break;
      case 'choose-room-activity/fuli-get-protocol':
        json = {
          retCode: '0',
          retMsg: '',
          data: {
            fuli_url: 'http://test.smartshop.rfmember.net/rfhouse-front/static/errorMsg.html?info=',
            isShowAutoBargain: 1,
            protocol_content:
              '<p>登录协议内容：</p><p>自定义标题</p><p>段落</p><p>arial</p><p>16px</p><p>登录协议内容：</p><p>自定义标题</p><p>段落</p><p>arial</p><p>16px</p><p>登录协议内容：</p><p>自定义标题</p><p>段落</p><p>arial</p><p>16px</p><p>登录协议内容：</p><p>自定义标题</p><p>段落</p><p>arial</p><p>16px</p><p>登录协议内容：</p><p>自定义标题</p><p>段落</p><p>arial</p><p>16px</p><p><br/></p>',
            protocol_title: 'mock：mock：mock：',
          },
        };
        break;
      case 'yunke/check-paas-user-info':
        json = {
          retCode: 0,
          // retCode: '-2030001',
          data: {
            mobile: '15011111111',
            idCard: '352222555555555555',
            dest: 2,
          },
          // retMsg: '',
          retMsg: '没有活动资格',
        };
        break;
      case 'choose-room-activity/get-orgcode':
        json = {
          retCode: 0,
          data: {
            orgcode: 'wuzhongadmin',
          },
          retMsg: '',
        };
        break;
      case 'choose-room-activity/get-join-sales-auto-login-url':
        json = {
          retCode: 0,
          data: {
            joinSalesAutoLoginUrl:
              '/index.php?r=choose-room-activity/auto-login&orgcode=orgcode&token=token&activityId=activityId&authCode=authCode',
          },
          retMsg: '',
        };
        break;
      case 'choose-room-activity/get-global-data':
        json = {
          retCode: 0,
          data: {},
          retMsg: '',
        };
        break;
      case 'zxkp/face-identify-api/create-user-face-identify':
        json = {
          retCode: 0,
          data: {
            url: 'url',
          },
          retMsg: '',
        };
        break;
      case 'choose-room-activity/get-flat-image':
        json = {
          retCode: '0',
          retMsg: '',
          data: [
            {
              id: '39ff76f9-88b0-1561-102f-039d2bd0450f',
              name: '2d',
              url: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/09246555502405833-1633778625297-%E8%BD%A6%E4%BD%8D%E5%9B%BE.png',
              height: '462',
              width: '598',
              touchZone: '{"sharp":"circle","sharpvalue":8}',
              roomMark: [
                {
                  markId: '39ff806a-b6dd-14b5-6cdb-a1ab49175a44',
                  roomId: '12c3e879-c6cd-e711-8e8f-00155d02062c',
                  x: 258,
                  y: 330,
                },
                {
                  markId: '39ff806a-b6dd-14dd-12f7-34e8a6cc8ace',
                  roomId: '6e31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 288,
                  y: 322,
                },
                {
                  markId: '39ff806a-b6dd-14e7-ff7c-b94d5b0eb342',
                  roomId: '6f31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 315,
                  y: 308,
                },
                {
                  markId: '39ff806a-b6dd-14f1-0574-47e487e22c9b',
                  roomId: '7031ad67-3b08-e611-ae4a-00155d02062c',
                  x: 338,
                  y: 214,
                },
                {
                  markId: '39ff806a-b6dd-14fa-104b-7bc220249d76',
                  roomId: '7131ad67-3b08-e611-ae4a-00155d02062c',
                  x: 361,
                  y: 212,
                },
                {
                  markId: '39ff806a-b6dd-1504-4158-25d2efe9a885',
                  roomId: '7231ad67-3b08-e611-ae4a-00155d02062c',
                  x: 386,
                  y: 207,
                },
                {
                  markId: '39ff806a-b6dd-150c-eba1-65c39fc95f93',
                  roomId: '7431ad67-3b08-e611-ae4a-00155d02062c',
                  x: 413,
                  y: 133,
                },
                {
                  markId: '39ff806a-b6dd-1515-655f-ae45778a603e',
                  roomId: '7331ad67-3b08-e611-ae4a-00155d02062c',
                  x: 432,
                  y: 129,
                },
                {
                  markId: '39ff806a-b6dd-157c-db12-bc581eb9dc0e',
                  roomId: '7731ad67-3b08-e611-ae4a-00155d02062c',
                  x: 450,
                  y: 127,
                },
                {
                  markId: '39ff806a-b6dd-1587-0850-66e574a0f981',
                  roomId: '7031ad67-3b08-e611-ae4a-00155d02062c',
                  x: 305,
                  y: 125.9999,
                },
                {
                  markId: '39ff806a-b6dd-1597-2c40-ec16247aab13',
                  roomId: '5c31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 157,
                  y: 290,
                },
                {
                  markId: '39ff806a-b6dd-15a6-b906-cfe9feeadbf0',
                  roomId: '4831ad67-3b08-e611-ae4a-00155d02062c',
                  x: 234,
                  y: 294,
                },
                {
                  markId: '39ff806a-b6dd-15b4-8b76-f2f357352673',
                  roomId: '3431ad67-3b08-e611-ae4a-00155d02062c',
                  x: 206,
                  y: 242,
                },
              ],
            },
            {
              id: '39ff7f81-2dd2-17b3-0977-8563623c5f13',
              name: '2d-1',
              url: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/05151593565087451-1633921767152-image.jpeg',
              height: '10049',
              width: '13326',
              touchZone: '{"sharp":"circle","sharpvalue":50}',
              roomMark: [
                {
                  markId: '39ff84a5-7810-24e9-dfcd-cb35ba282e59',
                  roomId: '',
                  x: 2915.0625,
                  y: 5980.0424,
                },
                {
                  markId: '39ff84a5-7810-2524-1a45-7babd5e5a0a9',
                  roomId: 'a6ec1882-5249-e811-adcb-00155d02062c',
                  x: 3015.0075,
                  y: 5996.7,
                },
                {
                  markId: '39ff84a5-7810-2532-1800-e3d988c5cd46',
                  roomId: '',
                  x: 3131.6099,
                  y: 5996.7,
                },
                {
                  markId: '39ff84a5-7810-253f-9abc-a0792cb20993',
                  roomId: 'a6ec1882-5249-e811-adcb-00155d02062c',
                  x: 3264.87,
                  y: 5996.7,
                },
                {
                  markId: '39ff84a5-7810-254e-09b2-6d33d145578a',
                  roomId: 'a9ec1882-5249-e811-adcb-00155d02062c',
                  x: 3431.445,
                  y: 5996.7,
                },
                {
                  markId: '39ff84a5-7810-255a-62a4-74e72d6b453c',
                  roomId: '66ec1882-5249-e811-adcb-00155d02062c',
                  x: 3664.65,
                  y: 5996.7,
                },
                {
                  markId: '39ff84a5-7810-2564-0068-f4fddc90054d',
                  roomId: '',
                  x: 3947.8275,
                  y: 5996.7,
                },
                {
                  markId: '39ff84a5-7810-2570-73da-a9ea4f98ad3a',
                  roomId: '',
                  x: 4880.6475,
                  y: 5913.4125,
                },
                {
                  markId: '39ff84a5-7810-257e-26cf-e30d6b73b0de',
                  roomId: '',
                  x: 3364.815,
                  y: 6146.6175,
                },
                {
                  markId: '39ff84a5-7810-2591-a106-96b3dc1fe1e4',
                  roomId: '',
                  x: 3947.8275,
                  y: 6146.6175,
                },
                {
                  markId: '39ff84a5-7810-259f-4bfa-f7827be78b8f',
                  roomId: '',
                  x: 4347.6075,
                  y: 6163.275,
                },
                {
                  markId: '39ff84a5-7810-25ab-f715-c2472ed32005',
                  roomId: 'a1ec1882-5249-e811-adcb-00155d02062c',
                  x: 3264.87,
                  y: 6946.1775,
                },
                {
                  markId: '39ff84a5-7810-25b7-0103-5c2172d3101f',
                  roomId: '',
                  x: 3015.0075,
                  y: 6762.945,
                },
                {
                  markId: '39ff84a5-7810-25c3-5f2a-b16ce5d80f3d',
                  roomId: '',
                  x: 3931.1699,
                  y: 7562.505,
                },
                {
                  markId: '39ff84a5-7810-25ce-cc3b-91418a0be715',
                  roomId: '97ec1882-5249-e811-adcb-00155d02062c',
                  x: 4164.375,
                  y: 7595.82,
                },
                {
                  markId: '39ff84a5-7810-25eb-273a-298eb79db568',
                  roomId: '68c2e879-c6cd-e711-8e8f-00155d02062c',
                  x: 4430.895,
                  y: 7595.82,
                },
                {
                  markId: '39ff84a5-7810-25f7-0286-8588f892f3c1',
                  roomId: 'bb7d62e8-f7d9-e511-ae4a-00155d02062c',
                  x: 4630.785,
                  y: 7595.82,
                },
                {
                  markId: '39ff84a5-7810-2602-c489-3f501c1c98fb',
                  roomId: '',
                  x: 4580.8125,
                  y: 7795.7099,
                },
                {
                  markId: '39ff84a5-7810-260d-46b6-be54357844ae',
                  roomId: 'bfc2e879-c6cd-e711-8e8f-00155d02062c',
                  x: 4647.4425,
                  y: 5863.44,
                },
              ],
            },
            {
              id: '39ff7f9f-37e7-0e35-f14a-1259010912cc',
              name: '1区高层负1层',
              url: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/09173986114425423-1633923330398-1%E5%8C%BA%E9%AB%98%E5%B1%82%E8%B4%9F1%E5%B1%82.jpg',
              height: '5683',
              width: '8216',
              touchZone: '{"sharp":"circle","sharpvalue":30}',
              roomMark: [
                {
                  markId: '39ff855d-42c6-2561-70f9-8911e56b11a1',
                  roomId: '6731ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3974.49,
                  y: 1499.42,
                },
                {
                  markId: '39ff855d-42c6-25d1-9dcb-4a128a963a41',
                  roomId: '6831ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4066.92,
                  y: 1499.42,
                },
                {
                  markId: '39ff855d-42c6-25dc-b675-dab3004368be',
                  roomId: '0fc3e879-c6cd-e711-8e8f-00155d02062c',
                  x: 4159.3499,
                  y: 1499.42,
                },
                {
                  markId: '39ff855d-42c6-25e5-045b-427999275fd9',
                  roomId: '6431ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3676.66,
                  y: 1509.69,
                },
                {
                  markId: '39ff855d-42c6-25ee-8da0-63eeb141306b',
                  roomId: '6531ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3769.09,
                  y: 1519.96,
                },
                {
                  markId: '39ff855d-42c6-25f8-424a-bd271da8b89d',
                  roomId: '6631ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3861.52,
                  y: 1519.96,
                },
                {
                  markId: '39ff855d-42c6-2601-2e55-a1b43aa81ac1',
                  roomId: '6a31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4272.32,
                  y: 1499.42,
                },
                {
                  markId: '39ff855d-42c6-260b-fb9c-1cfb9fcc4dba',
                  roomId: '6b31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4375.0199,
                  y: 1519.96,
                },
                {
                  markId: '39ff855d-42c6-2612-0f1f-fa2505cbe2fc',
                  roomId: '6c31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4446.91,
                  y: 1519.96,
                },
                {
                  markId: '39ff855d-42c6-261d-1703-781cc3d06856',
                  roomId: '6c31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4559.88,
                  y: 1509.69,
                },
                {
                  markId: '39ff855d-42c6-2625-4b7d-fa70c782208a',
                  roomId: '5431ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4652.31,
                  y: 1509.69,
                },
                {
                  markId: '39ff855d-42c6-262f-1056-d2ef7c5e9894',
                  roomId: '5531ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4755.01,
                  y: 1509.69,
                },
                {
                  markId: '39ff855d-42c6-2637-c286-1e0a6ca4c4d0',
                  roomId: '5631ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3676.66,
                  y: 1735.63,
                },
                {
                  markId: '39ff855d-42c6-2642-7038-3823b53199e1',
                  roomId: '5831ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3779.36,
                  y: 1725.36,
                },
              ],
            },
            {
              id: '39ff80cc-d5e3-1d1e-59f6-94fb5fbeb7c5',
              name: '批次选房',
              url: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/app/property-center/08805632617670289-1633943342789-2d%E8%BD%A6%E4%BD%8D%E5%9B%BE.jpeg?x-oss-process=image/quality,Q_65',
              height: '5683',
              width: '8216',
              touchZone: '{"sharp":"circle","sharpvalue":30}',
              roomMark: [
                {
                  markId: '39ff8b03-5f4d-0de9-6922-7cefbda66aca',
                  roomId: '5531ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3676.66,
                  y: 2988.57,
                },
                {
                  markId: '39ff8b03-5f4d-0e0f-289e-dc32cf6c8877',
                  roomId: '6631ad67-3b08-e611-ae4a-00155d02062c',
                  x: 3861.52,
                  y: 2988.57,
                },
                {
                  markId: '39ff8b03-5f4d-0e19-7d99-666c38ec7183',
                  roomId: '2d31ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4159.3499,
                  y: 2998.84,
                },
                {
                  markId: '39ff8b03-5f4d-0e23-faf3-d44b5d42e5f5',
                  roomId: '3231ad67-3b08-e611-ae4a-00155d02062c',
                  x: 4354.48,
                  y: 2998.84,
                },
                {
                  markId: '39ff8b03-5f4d-0e2b-8e4e-993ccdc74ed6',
                  roomId: '',
                  x: 3974.49,
                  y: 2156.7,
                },
              ],
            },
          ],
        };
        break;
      case 'choose-room-activity/get-sign-info':
        json = {
          retCode: 0,
          data: {
            erpSignUrl: 'erpSignUrl',
          },
          retMsg: '',
        };
        break;
      default:
        json = {
          retCode: 0,
          data: 'get default',
          retMsg: '',
        };
        break;
    }

    json.global = {
      isPublish: null,
      roomType: 0,
      roomTypeName: '房间',
      // 选房模式(0:抢房;1:分批选房;2:顺序选房)
      mode: 0,
      ...getBatchNameNoticeBar(),
      ...getSelectionRoomNoticeBar(),
      ...getLiveDetailData(),
      ...getDanmakuData(),
    };
    if (r === 'choose-room-activity/get-global-data') {
      json.global = Object.assign(json.global, {
        isPublish: true,
        ...getSelectionRoomHeaderData(),
      });
    }
    res.json(json);
  },
};
