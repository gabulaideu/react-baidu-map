import { useEffect, useState, useMemo } from 'react';
import { MapChildProps } from '../common/map';
import { MapProps } from './';
import { useEnableProperties, useProperties } from '../common/useEnableProperties';

export interface UseMap extends MapProps, MapChildProps {
  /**
   * 指定的容器
   */
  container?: string | HTMLDivElement;
}

export default (props: UseMap = {}) => {
  const { widget, minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick, ready } = props;
  const [center, setCenter] = useState(props.center || '上海');
  const [autoLocalCity, setAutoLocalCity] = useState(props.autoLocalCity);
  const [map, setMap] = useState<BMap.Map>();
  const [zoom, setZoom] = useState(props.zoom || 15);
  const [container, setContainer] = useState<string | HTMLDivElement>(props.container as (string | HTMLDivElement));
  useMemo(() => {
    if (container && !map && BMap && BMap.Map) {
      const instance = new BMap.Map(container, { minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick });
      /**
       * 加载控件
       */
      widget && widget.forEach((item) => {
        if(typeof item === 'string') {
          instance.addControl(new (BMap[item] as any)()); 
        } else if (typeof item === 'object' && item.name) {
          const options = typeof item.options === 'function' ? item.options(BMap) : item.options
          instance.addControl(new (BMap[item.name] as any)(options)); 
        }
      });
      setMap(instance);
    }
  }, [container, map]);

  /**
   * 根据参数设置中心点
   */
  useEffect(() => {
    if (map && center) {
      let cent = center;
      if (center && (center as BMap.Point).lng && (center as BMap.Point).lat) {
        cent = new BMap.Point((center as BMap.Point).lng, (center as BMap.Point).lat);
      }
      map.centerAndZoom(cent!, zoom!);
    }
  }, [center, map]);

  /**
   * IP定位获取当前城市，进行自动定位
   */
  useEffect(() => {
    if (map && autoLocalCity) {
      const myCity = new BMap.LocalCity();
      myCity.get((result) => {
        setCenter(result.name as any);
        setZoom(result.level as any);
        setAutoLocalCity(false);
      });
    }
  }, [autoLocalCity, map]);
  // 'Center',
  useProperties<BMap.Map, UseMap>(map!, props, ['DefaultCursor', 'DraggingCursor', 'MinZoom', 'MaxZoom', 'MapStyle', 'MapStyleV2', 'Panorama', 'CurrentCity', 'MapType', 'Viewport', 'Zoom',]);
  useEnableProperties<BMap.Map, UseMap>(map!, props, ['Dragging', 'ScrollWheelZoom', 'DoubleClickZoom', 'Keyboard', 'InertialDragging', 'ContinuousZoom', 'PinchToZoom', 'AutoResize']);
  return {
    map, setMap,
    container, setContainer,
    center, setCenter,
    autoLocalCity, setAutoLocalCity,
  }
}