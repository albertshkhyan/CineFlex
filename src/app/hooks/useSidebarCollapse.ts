import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCollapsed,
  toggleCollapsed,
} from '@modules/menu/store/sidebar.slice';
import { useAppSelector } from '@app/store/hook';

const useSidebarCollapse = () => {
  const dispatch = useDispatch();
  const isCollapsed = useAppSelector((state) => state.sidebar.isCollapsed);

  const handleMouseEnter = useCallback(() => {
    dispatch(setCollapsed(false));
  }, [dispatch]);

  const handleMouseLeave = useCallback(() => {
    dispatch(setCollapsed(true)); // correct
    // dispatch(setCollapsed(false));
  }, [dispatch]);

  const handleToggle = useCallback(() => {
    dispatch(toggleCollapsed());
  }, [dispatch]);

  return {
    isCollapsed,
    handleMouseEnter,
    handleMouseLeave,
    toggleSidebar: handleToggle,
  };
};

export default useSidebarCollapse;
