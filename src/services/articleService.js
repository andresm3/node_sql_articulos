'use strict';

module.exports = class ArticleService {
  constructor( {articleRepository} ) {
    
    this.articleRepository = articleRepository;
  }

  async create(article) {
    
    const data = await this.articleRepository.createOne(article);
    if (!data) throw new Exception("INTERNAL_SERVER_ERROR", "Article not created");
    return data;
  }

  async updateById(id, article) {
    const data = await this.articleRepository.updateById(id, article);
    if (!data) throw new Exception("INTERNAL_SERVER_ERROR", "Article not created");
    return data;
  }

  async getArticleByName(name) {
    return this.articleRepository.findArticleByName(name);
  }

  async getArticles() {
    return this.articleRepository.getArticles();
  }
};
