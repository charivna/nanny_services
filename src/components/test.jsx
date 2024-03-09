const fetchData = useCallback(() => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
      setallFavorits(storedFavorites);
      setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}, [visibleTeachers]);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, user => {
    if (user) {
      fetchData();
    }
  });

  return () => unsubscribe();
}, [visibleTeachers, fetchData]);
