<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FilmRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\RangeFilter;
use ApiPlatform\Core\Annotation\ApiFilter;

#[ORM\Entity(repositoryClass: FilmRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['Film']],
    denormalizationContext: ['groups' => ['Film']]
)]
#[ApiFilter(SearchFilter::class, properties: [
    'titre' => 'partial',
    'resume' => 'partial',
    'categorie' => 'exact'
    ])]
#[ApiFilter(RangeFilter::class, properties: ['id', 'duree'])]
class Film
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups("Film")]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups("Film")]
    private $titre;

    #[ORM\Column(type: 'integer')]
    #[Groups("Film")]
    private $duree;

    #[ORM\Column(type: 'text')]
    #[Groups("Film")]
    private $resume;

    #[ORM\ManyToOne(targetEntity: Version::class, inversedBy: 'films')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups("Film")]
    private $version;

    #[ORM\ManyToOne(targetEntity: Categorie::class, inversedBy: 'films')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups("Film")]
    private $categorie;

    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDuree(): ?int
    {
        return $this->duree;
    }

    public function setDuree(int $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getResume(): ?string
    {
        return $this->resume;
    }

    public function setResume(string $resume): self
    {
        $this->resume = $resume;

        return $this;
    }

    /**
     * @return Version
     */
    public function getVersion(): Version
    {
        return $this->version;
    }

    public function setVersion(Version $version): self
    {
        $this->version = $version;

        return $this;
    }


    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }
}
