import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AuthParams} from '@navigation/stackParams';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';

const useQrCode = () => {
  const [qrCodeDetail, setQrCodeDetail] = useState();
  const route = useRoute<RouteProp<AuthParams, 'qrCode'>>();
  useEffect(() => {
    getDetail();
  }, []);
  console.log(route.params.token);
  const getDetail = async () => {
    console.log('nsie');
    try {
      const {data} = await axiosInstance.get(constant.details, {
        headers: {
          auth: `${route?.params?.token}`,
        },
      });
      console.log(data);
      setQrCodeDetail(data?.data);
    } catch (error) {
      console.log('error');
    }
  };
  return {};
};

export default useQrCode;
