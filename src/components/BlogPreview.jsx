import React from 'react';
import './BlogPreview.css';
import { useTranslation } from 'react-i18next';

const blogImages = [
  "/images/hero_bg.png",
  "/images/crystal_pic.png",
  "/images/tarot_pic.png"
];

const BlogPreview = () => {
  const { t } = useTranslation();
  const blogsData = t('blog.items', { returnObjects: true });
  return (
    <section className="blog-section section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>{t('blog.title')}</h2>
          <p className="text-lead" style={{ margin: '0 auto', maxWidth: '600px' }}>
            {t('blog.desc')}
          </p>
        </div>

        <div className="blog-grid">
          {blogsData.map((blog, idx) => (
            <div key={idx} className="blog-card">
              <div className="blog-img-wrapper">
                <img src={blogImages[idx]} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{blog.category}</span>
                  <span>{blog.time}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
