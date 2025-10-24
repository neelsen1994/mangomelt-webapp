from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    database_url: str = "postgresql+psycopg://mango:pass@db:5432/mangomelt"
    jwt_secret: str = "dev"
    stripe_secret_key: str = ""
    stripe_webhook_secret: str = ""
    s3_endpoint: str = ""
    s3_bucket: str = "mangomelt-media"
    s3_access_key: str = ""
    s3_secret_key: str = ""

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()
