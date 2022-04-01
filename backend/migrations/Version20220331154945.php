<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220331154945 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles CLOB NOT NULL --(DC2Type:json)
        , password VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649F85E0677 ON user (username)');
        $this->addSql('DROP INDEX IDX_8244BE22BCF5E72D');
        $this->addSql('CREATE TEMPORARY TABLE __temp__film AS SELECT id, categorie_id, titre, duree, resume FROM film');
        $this->addSql('DROP TABLE film');
        $this->addSql('CREATE TABLE film (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, categorie_id INTEGER NOT NULL, titre VARCHAR(255) NOT NULL, duree INTEGER NOT NULL, resume CLOB NOT NULL, CONSTRAINT FK_8244BE22BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO film (id, categorie_id, titre, duree, resume) SELECT id, categorie_id, titre, duree, resume FROM __temp__film');
        $this->addSql('DROP TABLE __temp__film');
        $this->addSql('CREATE INDEX IDX_8244BE22BCF5E72D ON film (categorie_id)');
        $this->addSql('DROP INDEX IDX_5FA2C8E04BBC2705');
        $this->addSql('DROP INDEX IDX_5FA2C8E0567F5183');
        $this->addSql('CREATE TEMPORARY TABLE __temp__film_version AS SELECT film_id, version_id FROM film_version');
        $this->addSql('DROP TABLE film_version');
        $this->addSql('CREATE TABLE film_version (film_id INTEGER NOT NULL, version_id INTEGER NOT NULL, PRIMARY KEY(film_id, version_id), CONSTRAINT FK_5FA2C8E0567F5183 FOREIGN KEY (film_id) REFERENCES film (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_5FA2C8E04BBC2705 FOREIGN KEY (version_id) REFERENCES version (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO film_version (film_id, version_id) SELECT film_id, version_id FROM __temp__film_version');
        $this->addSql('DROP TABLE __temp__film_version');
        $this->addSql('CREATE INDEX IDX_5FA2C8E04BBC2705 ON film_version (version_id)');
        $this->addSql('CREATE INDEX IDX_5FA2C8E0567F5183 ON film_version (film_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP INDEX IDX_8244BE22BCF5E72D');
        $this->addSql('CREATE TEMPORARY TABLE __temp__film AS SELECT id, categorie_id, titre, duree, resume FROM film');
        $this->addSql('DROP TABLE film');
        $this->addSql('CREATE TABLE film (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, categorie_id INTEGER NOT NULL, titre VARCHAR(255) NOT NULL, duree INTEGER NOT NULL, resume CLOB NOT NULL)');
        $this->addSql('INSERT INTO film (id, categorie_id, titre, duree, resume) SELECT id, categorie_id, titre, duree, resume FROM __temp__film');
        $this->addSql('DROP TABLE __temp__film');
        $this->addSql('CREATE INDEX IDX_8244BE22BCF5E72D ON film (categorie_id)');
        $this->addSql('DROP INDEX IDX_5FA2C8E0567F5183');
        $this->addSql('DROP INDEX IDX_5FA2C8E04BBC2705');
        $this->addSql('CREATE TEMPORARY TABLE __temp__film_version AS SELECT film_id, version_id FROM film_version');
        $this->addSql('DROP TABLE film_version');
        $this->addSql('CREATE TABLE film_version (film_id INTEGER NOT NULL, version_id INTEGER NOT NULL, PRIMARY KEY(film_id, version_id))');
        $this->addSql('INSERT INTO film_version (film_id, version_id) SELECT film_id, version_id FROM __temp__film_version');
        $this->addSql('DROP TABLE __temp__film_version');
        $this->addSql('CREATE INDEX IDX_5FA2C8E0567F5183 ON film_version (film_id)');
        $this->addSql('CREATE INDEX IDX_5FA2C8E04BBC2705 ON film_version (version_id)');
    }
}
