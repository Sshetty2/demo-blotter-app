import { useCallback, useLayoutEffect, useState } from 'react';
import cx from 'classnames';
import { AgGridReact } from 'ag-grid-react';
import {
  GridApi,
  GridReadyEvent,
  ClientSideRowModelModule,
  ModuleRegistry,
  ColumnAutoSizeModule,
  ClientSideRowModelApiModule,
  themeBalham
} from 'ag-grid-community';
import { Tooltip } from 'antd';
import Draggable, {
  ControlPosition,
  DraggableData,
  DraggableEvent
} from 'react-draggable';
import {
  AG_GRID_BALHAM_THEME,
  BLOTTER_COLUMN_SETTINGS,
  DRAG_HEIGHT_MIN
} from '../constants';
import { IProps } from './types';

import './Blotter.scss';

ModuleRegistry.registerModules([ClientSideRowModelModule, ClientSideRowModelApiModule, ColumnAutoSizeModule]);

const baseClass = 'blotter';

const Blotter = ({ blotterData, loadingState, lastUpdated }: IProps) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [dragHeight, setDragHeight] = useState(2000);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    const blotterColumns = [...Object.values(BLOTTER_COLUMN_SETTINGS)];
    params.api.setGridOption('columnDefs', blotterColumns);

    params.api.resetRowHeights();
    setGridApi(params.api);
  }, []);

  const [activeDragHeight, setActiveDragHeight] = useState(0);

  // controls drag handle position
  const [dragPosition, setDragPosition] = useState<
    ControlPosition | undefined
  >();

  const [blotterHeightStyle, setBlotterHeightStyle] = useState({
    height: `${activeDragHeight}px`
  });

  useLayoutEffect(() => {
    if (gridApi) {
      if (loadingState) {
        return gridApi.showLoadingOverlay();
      }

      return gridApi.hideOverlay();
    }
  }, [loadingState]);

  const onDrag = useCallback(
    (_: DraggableEvent, data: DraggableData) => {
      const newDragHeight = activeDragHeight || dragHeight;

      // hacky solution to fix drag ratio calculation
      setActiveDragHeight(newDragHeight - data.deltaY * 5);
    },
    [activeDragHeight]
  );

  const onDragStop = useCallback(() => {
    setDragHeight(activeDragHeight);

    setActiveDragHeight(0);

    // Reset the drag handle position as it gets out of sync
    setDragPosition({
      x: 0,
      y: 0
    });
  }, [activeDragHeight]);

  useLayoutEffect(() => {
    const heightValue = activeDragHeight
      || (dragHeight >= DRAG_HEIGHT_MIN ? dragHeight : DRAG_HEIGHT_MIN);

    setBlotterHeightStyle({
      height: `${heightValue}px`
    });
  }, [activeDragHeight]);

  const commentCellRenderer = useCallback(
    ({ value }: { value: string }) => (
      <Tooltip title={value} placement="topLeft">
        <div className={`${baseClass}__tooltip`}>{value}</div>
      </Tooltip>
    ),
    []
  );

  return (
    <>
      <div className={`${baseClass}__title-bar`}>
        <div className={`${baseClass}__title`}>Order Blotter</div>
        {lastUpdated && (
          <div className={`${baseClass}__lastUpdated`}>
            Last Updated : {lastUpdated}
          </div>
        )}
      </div>
      <Draggable
        axis="y"
        handle={`.${baseClass}__drag-handle`}
        onDrag={onDrag}
        onStop={onDragStop}
        position={dragPosition}

      >
        <div className={`${baseClass}__drag-handle`} />
      </Draggable>
      <div
        className={cx(AG_GRID_BALHAM_THEME, baseClass)}
        style={blotterHeightStyle}
      >
        <AgGridReact
          theme={themeBalham}
          components={{
            commentCellRenderer
          }}
          onGridReady={onGridReady}
          headerHeight={25}
          rowData={blotterData}
        />
      </div>
    </>
  );
};

export default Blotter;
