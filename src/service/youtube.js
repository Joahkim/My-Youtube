class Youtube {
  constructor(httpClient) {
    this.youtubeBaseData = httpClient;
  }

  async mostPopular() {
    const response = await this.youtubeBaseData.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 50,
      },
    });
    return response.data.items;
  }

  async search(검색어) {
    const response = await this.youtubeBaseData.get("search", {
      params: {
        part: "snippet",
        maxResults: 50,
        type: "video",
        q: 검색어,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
