import { useEffect, useState } from 'react';

const INITIAL_ITEM_COUNT = 8;
const LOAD_ITEM_COUNT = 8;
const SCROLL_THRESHOLD = 100;

interface UseInfiniteScrollProps<T> {
  items: T[];
  initialCount?: number;
  loadCount?: number;
}

function useInfiniteScroll<T>({
  items,
  initialCount = INITIAL_ITEM_COUNT,
  loadCount = LOAD_ITEM_COUNT,
}: UseInfiniteScrollProps<T>) {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [itemIndex, setItemIndex] = useState(initialCount);

  useEffect(() => {
    setVisibleItems(items.slice(0, initialCount));
    setItemIndex(initialCount);
  }, [items, initialCount]);

  const loadMoreItems = () => {
    debugger;
    const nextIndex = Math.min(itemIndex + loadCount, items.length);
    setVisibleItems((prev) => [...prev, ...items.slice(itemIndex, nextIndex)]);
    setItemIndex(nextIndex);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    alert(1);
    const bottomReached =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + SCROLL_THRESHOLD;

    debugger;
    if (bottomReached) {
      loadMoreItems();
    }
  };

  return {
    visibleItems,
    handleScroll,
  };
}

export default useInfiniteScroll;
