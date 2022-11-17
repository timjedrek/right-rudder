class Notam < ApplicationRecord
  validates :status, inclusion: { :in => ['Published','Drafting']}
  validates :title, presence: true
  validates :category, inclusion: { :in => ['Business and Marketing','Aviation and Flying', 'News and Announcements']}
  validates :notam_date, presence: true
  validates :author, presence: true
  validates :feature_image, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'], size_range: 1..(2.megabytes) }
  validates :notam_body, presence: true
  validates :featured, inclusion: { :in => ['Yes','No']}
  
  has_one_attached :feature_image

  # Types of blog posts
  scope :business_and_marketing, -> {where(category: "Business and Marketing")}
  scope :aviation_and_flying, -> {where(category: "Aviation and Flying")}
  scope :news_and_announcements, -> {where(category: "News and Announcements")}
  
  #  Featured / Status
  scope :featured, -> {where(featured: "Yes")}
  scope :published, -> {where(status: "Published")}

end
